//Cấu hình firebase
const firebaseConfig = {
  apiKey: "AIzaSyBe4N9ZQVJpGiYlbt3Kw0CLDDeKDqNq23s",
  authDomain: "duanhplshop.firebaseapp.com",
  databaseURL: "https://duanhplshop-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "duanhplshop",
  storageBucket: "duanhplshop.appspot.com",
  messagingSenderId: "366586229043",
  appId: "1:366586229043:web:35ae7666188e1248d80e46"
};
//Thiết lập firebase dựa vào cấu hình đó
firebase.initializeApp(firebaseConfig);
// Đăng ký
const register = async () => {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  const passwordConfirm = document.getElementById("register-password-confirm").value;
  const fullName = document.getElementById("full-name").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const address = document.getElementById("address").value;
  const avatar = document.getElementById("avatar").files[0];

  if (email === "" || password === "" || passwordConfirm === "" || fullName === "" || phoneNumber === "" || address === "" || avatar === "") {
    showAlert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  if (password !== passwordConfirm) {
    showAlert("Mật khẩu không khớp!");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showAlert("Email không hợp lệ!");
    return;
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    showAlert("Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ cái và số!");
    return;
  }

  const phoneNumberRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
  if (!phoneNumberRegex.test(phoneNumber)) {
    showAlert("Số điện thoại không hợp lệ!");
    return;
  }

  try {
    // Tạo tài khoản bằng cách kết nối firebase và gọi hàm tạo
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    // Lấy thông tin user vừa tạo
    const user = userCredential.user;
    // Lưu hình vào storage
    const storageRef = firebase.storage().ref('user_avatars/' + user.uid);
    // Đưa dữ liệu hình vào
    const snapshot = await storageRef.put(avatar);
    // Lấy link avatar
    const downloadUrl = await snapshot.ref.getDownloadURL();
    // Lưu thông tin user vào reltime database
    await firebase.database().ref('users/' + user.uid).set({
      displayName: fullName,
      phoneNumber: phoneNumber,
      address: address,
      photoURL: downloadUrl
    });

    showAlert('Đăng ký thành công');
    setTimeout(() => {
      hideAlert();
      window.location.href = "login.html";
    }, 3000);
  } catch (error) {
    // Xử lý lỗi đăng ký Firebase
    const errorCode = error.code;
    const errorMessage = error.message;

    switch (errorCode) {
      case 'auth/weak-password':
        showAlert("Mật khẩu quá yếu, vui lòng chọn mật khẩu mạnh hơn.");
        break;
      case 'auth/email-already-in-use':
        showAlert("Email đã được sử dụng, vui lòng chọn email khác.");
        break;
      case 'auth/invalid-email':
        showAlert("Email không hợp lệ.");
        break;
      default:
        showAlert(errorMessage);
    }
    switch (errorCode) {
      case 'auth/weak-password':
        showFieldError("password", "Mật khẩu quá yếu, vui lòng chọn mật khẩu mạnh hơn.");
        break;
      case 'auth/email-already-in-use':
        showFieldError("email", "Email đã được sử dụng, vui lòng chọn email khác.");
        break;
      case 'auth/invalid-email':
        showFieldError("email", "Email không hợp lệ.");
        break;
      default:
        showAlert(errorMessage);
    }
  }
}

const showFieldError = (fieldId, message) => {
  const errorElement = document.getElementById(`${fieldId}-error`);
  errorElement.innerHTML = message;
  errorElement.style.display = "block";
}


// Hiển thị thông báo
const showAlert = (message) => {
  const alertElement = document.getElementById("alert-message");
  alertElement.innerHTML = message;
  alertElement.style.display = "block";
}

// Ẩn thông báo
const hideAlert = () => {
  const alertElement = document.getElementById("alert-message");
  alertElement.style.display = "none";
}



//Đăng nhập
const login = async () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    // Reset trạng thái input khi thử lại đăng nhập
    emailInput.classList.remove("error-input");
    passwordInput.classList.remove("error-input");

    // Kiểm tra nếu cả email và password đều không nhập
    if (email.trim() === "" && password.trim() === "") {
      displayError("Vui lòng nhập email và mật khẩu.");
      emailInput.classList.add("error-input");
      passwordInput.classList.add("error-input");
      return;
    }

    // Kiểm tra nếu chỉ email hoặc chỉ password không nhập
    if (email.trim() === "") {
      displayError("Vui lòng nhập email.");
      emailInput.classList.add("error-input");
      return;
    }

    if (password.trim() === "") {
      displayError("Vui lòng nhập mật khẩu.");
      passwordInput.classList.add("error-input");
      return;
    }

    // Kiểm tra định dạng email sử dụng regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      displayError("Email không hợp lệ.");
      emailInput.classList.add("error-input");
      return;
    }

    // Thực hiện đăng nhập bằng email và password
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Lấy thông tin user từ realtime database
    const snapshot = await firebase.database().ref('users/' + user.uid).once('value');
    const userData = snapshot.val();

    localStorage.setItem('user', JSON.stringify(userData));
    alert(`${user.email} Đã đăng nhập thành công`);

    if (user.email == 'adminne@gmail.com') {
      window.location.href = "../admin/index.html";
    } else {
      window.location.href = "../site/index.html";
    }
  } catch (error) {
    // Xử lý lỗi đăng nhập Firebase
    const errorCode = error.code;
    const errorMessage = error.message;

    // Hiển thị thông báo lỗi cụ thể và thêm lớp cho input
    switch (errorCode) {
      case 'auth/invalid-email':
        displayError("Email không hợp lệ.");
        emailInput.classList.add("error-input");
        break;
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        // Bắt lỗi khi email hoặc mật khẩu không đúng
        displayError("Email hoặc mật khẩu không đúng.");
        emailInput.classList.add("error-input");
        passwordInput.classList.add("error-input");
        break;
      case 'auth/invalid-login-credentials':
        // Bắt lỗi khi thông tin đăng nhập không hợp lệ
        displayError("Email hoặc mật khẩu không đúng.");
        emailInput.classList.add("error-input");
        passwordInput.classList.add("error-input");
        break;
      default:
        displayError("Email hoặc mật khẩu không đúng.");
    }
  }
}

const displayError = (message) => {
  // Hiển thị thông báo lỗi
  const errorMessageElement = document.getElementById("error-message");
  errorMessageElement.innerHTML = message;
  errorMessageElement.style.display = "block";
}

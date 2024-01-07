async function getStudentList() {
    const response = await fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students');
    const students = await response.json();

    const studentTable = document.getElementById('studentList');
    students.forEach((student) => {
        studentTable.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td><img src="${student.avatar}" alt="Avatar" width="100" height="100"></td>
                <td>${student.name}</td>
                <td>${student.createdAt}</td>
            </tr>
        `;
    });
}

getStudentList();
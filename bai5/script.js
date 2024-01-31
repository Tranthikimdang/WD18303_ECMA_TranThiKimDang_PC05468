import { Comment } from "./services.js";
const comment = new Comment();

document.addEventListener("DOMContentLoaded", async () => {
  let id = null;

  const btnAdd = document.getElementById("add");
  const btnEdit = document.getElementById("edit");
  const btnRemove = document.getElementById("delete");

  const name = document.getElementById("name");
  const postId = document.getElementById("postId");
  const email = document.getElementById("email");
  const body = document.getElementById("body");

  // Theem moi
  btnAdd.addEventListener("click", async () => {
    await comment.post({
      postId: postId.value,
      email: email.value,
      name: name.value,
      body: body.value,
    });
    resetForm()
    getList();
  });

  btnEdit.addEventListener("click", async () => {
    await comment.update(id, {
      postId: postId.value,
      email: email.value,
      name: name.value,
      body: body.value,
    });
    resetForm()
    getList();
  });
  btnRemove.addEventListener("click", async () => {
    await comment.remove(id);
    resetForm()
    getList();
  });

  const getList = async () => {
    const comments = await comment.getAll();
    const divListComment = document.querySelector(".list-comment tbody");
    divListComment.innerHTML = "";

    for (let key in comments) {
      if (comments[key] == null) {
        continue;
      }
      divListComment.innerHTML += `<td><p data-id="${key}" class="comment" style='cursor:pointer'>${comments[key].name}</p></td>`;
    }
    document.querySelectorAll(".comment").forEach((item) => {
      item.addEventListener("click", async () => {
        const detailComment = await comment.getOne(
          item.getAttribute("data-id")
        );
        id = item.getAttribute("data-id");

        name.setAttribute("value", detailComment.name);
        postId.setAttribute("value", detailComment.postId);
        email.setAttribute("value", detailComment.email);
        body.setAttribute("value", detailComment.body);
      });
    });
  };
  getList();
  const resetForm = () => {
    name.setAttribute("value", "");
    postId.setAttribute("value", "");
    email.setAttribute("value", "");
    body.setAttribute("value", "");
  };
});

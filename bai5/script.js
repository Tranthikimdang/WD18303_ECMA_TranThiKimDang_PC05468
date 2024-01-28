class APICaller {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get(endpoint) {
        // cách gọi axios nối cái baseUrl và endpoint ở đây sau đó trả về data
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}.json`);
            return await response.json();
        } catch (error) {
            console.error(Error`fetching data from ${endpoint}:`, error);
        }
    }
    async post(endpoint, data) {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}.json`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            return response
                .json()
                .then((data) => {
                    return data;
                })
                .catch((err) => { });
        } catch (error) {
            return console.error(`Error posting data to ${endpoint}:`, error);
        }
    }
    async update(endpoint, id, data) {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}/${id}.json`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            response
                .json()
                .then((data) => {
                    return data;
                })
                .catch((err) => { });
        } catch (error) {
            return console.error(`Error posting data to ${endpoint}:`, error);
        }
    }
    async remove(endpoint, id) {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}/${id}.json`, {
                method: "DELETE",
            });
            response
                .json()
                .then((data) => { })
                .catch((err) => { });
        } catch (error) {
            return console.error(`Error deleting data from ${endpoint}:`, error);
        }
    }
}

class Comment extends APICaller {
    constructor(baseUrl) {
        super(baseUrl);
        this.endpoint = "comments";
    }

    async post(data) {
        const res = await super.post(this.endpoint, data);
        return res;
    }

    async update(id, data) {
        const res = await super.update(this.endpoint, id, data);
        return res;
    }

    async remove(id) {
        const res = await super.remove(this.endpoint, id);
        return res;
    }

    async getAll() {
        const res = await super.get(this.endpoint);
        return res;
    }

    async getOne(id) {
        const res = super.get(`${this.endpoint}/${id}`);
        return res;
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const baseUrl = "https://json-c068a-default-rtdb.firebaseio.com";

    const comment = new Comment(baseUrl);
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
        getList();
    });

    btnEdit.addEventListener("click", async () => {
        await comment.update(id, {
            postId: postId.value,
            email: email.value,
            name: name.value,
            body: body.value,
        });
        getList();
    });
    btnRemove.addEventListener("click", async () => {
        await comment.remove(id);
        name.setAttribute("value", "");
        postId.setAttribute("value", "");
        email.setAttribute("value", "");
        body.setAttribute("value", "");
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
});
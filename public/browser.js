console.log("FrontEnd JS ishga tushdi");
function itemTemplate(item) {
  return `<li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja}</span>
          <div>
            <button data-id="${item._id}" class="btn btn-primary" style="border-radius: 20px">
              O'zgartirish
            </button>
            <button data-id="${item._id}" class="btn btn-primary" style="border-radius: 20px">
              O'chirish
            </button>
          </div>
        </li>`;
}

let createField = document.getElementById("create-field");
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault(); //Stop traditional API

  //REST API
  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("iltimos qaytadan harakat qiling");
    });
});

document.addEventListener("click", function (e) {
  //  delete oper
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Are you sure you want to delete")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((respose) => {
          console.log(respose.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("iltimos qaytadan harakat qiling");
        });
    }
  }

  //   edit oper
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "O'zgartirish kiriting",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("iltimos qaytadan harakat qiling!");
        });
    }
  }
});

document.getElementById("clean-all").addEventListener("click", function () {
  axios.post("/delete-all", { delete_all: true }).then((respose) => {
    alert(respose.data.state);
    document.location.reload();
  });
});

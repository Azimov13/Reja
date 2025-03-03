console.log("frontEnd JS ishga tushdi");
function itemTemplate(item) {
  return `<li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text"${item.reja}</span>
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
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((responce) => {
      document
        .getElementById("item-list")
        .insertAdjacentElement("beforeend", itemTemplate(responce.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {});
  console.log("iltimos qaytadan harakat qiling");
});

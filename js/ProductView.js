import Storage from "./Storage.js";
const addnewproductbtn = document.getElementById("add-new-product");
const searchInput = document.getElementById("search-input");
const selectsort = document.getElementById("sort-product");
class productView {
  constructor() {
    addnewproductbtn.addEventListener("click", (e) => this.addnewproduct());
    searchInput.addEventListener("input", (e) => this.searchproduct(e));
    selectsort.addEventListener("change", (e) => this.sortproducts(e));
    this.products = [];
  }
  addnewproduct() {
    const title = document.getElementById("product-title").value;
    const quantity = document.getElementById("product-quantity").value;
    const category = document.getElementById("product-category").value;
    if (!title || !quantity || !category) return;
    Storage.saveproducts({ title, quantity, category });
    this.products = Storage.getAllproducts();
    this.createProductList(this.products);
  }
  setApp() {
    this.products = Storage.getAllproducts();
  }
  createProductList(product) {
    let result = ``;
    product.forEach((el) => {
      let categoryid = Storage.getAllCategories().find((e) => {
        return e.id == el.category;
      });
      result += `
      <div class="d-flex justify-content-between mt-3">
      <span class="text-white  fonts">${el.title}</span>
        <span class="text-white fonts">${new Date().toLocaleDateString(
          "fa-IR"
        )}</span>
        <div class="text-white fonts bg-secondary rounded-5 px-3 text-center">${
          categoryid.title
        }</div>
        <div class="text-white fonts">${el.quantity}</div>
        <button type="button" data-id=${
          el.id
        } class="delete-product btn btn-outline-danger">Delete</button>
        </div>
      `;
    });
    document.getElementById("product-list").innerHTML = result;
    const deleteproduct = [...document.querySelectorAll(".delete-product")];
    deleteproduct.forEach((item) => {
      item.addEventListener("click", (e) => this.deleteproduct(e));
    });
  }
  searchproduct(e) {
    let value = e.target.value.trim().toLowerCase();
    const filterproduct = this.products.filter((e) =>
      e.title.toLowerCase().includes(value)
    );
    this.createProductList(filterproduct);
  }
  sortproducts(e) {
    const value = e.target.value;
    this.createProductList(Storage.getAllproducts(value));
  }
  deleteproduct(e) {
    Storage.deleteproduct(e.target.dataset.id);
    this.products = Storage.getAllproducts();
    this.createProductList(Storage.getAllproducts());
  }
}

export default new productView();

import Storage from "./Storage.js";
const addnewproductbtn = document.getElementById("add-new-product");
const searchInput = document.getElementById("search-input");
class productView {
  constructor() {
    addnewproductbtn.addEventListener("click", (e) => this.addnewproduct());
    searchInput.addEventListener("input", (e) => this.searchproduct(e));
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
      let categoryid = Storage.getAllCategories().find((e) => {return e.id == el.category;});
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
        <button type="button" class="btn btn-outline-danger">Delete</button>
        </div>
      `;
    });
    document.getElementById("product-list").innerHTML = result;
  }
  searchproduct(e) {
    let value = e.target.value.trim().toLowerCase();
    const filterproduct = this.products.filter((e) =>e.title.toLowerCase().includes(value));
    // this.products = filterproduct;
    this.createProductList(filterproduct);
  }
}

export default new productView();

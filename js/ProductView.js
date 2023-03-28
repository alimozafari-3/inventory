import Storage from "./Storage.js";
const addnewproductbtn = document.getElementById("add-new-product");

class productView {
  constructor() {
    addnewproductbtn.addEventListener("click", (e) => this.addnewproduct());
    this.products = [];
  }
  addnewproduct() {
    const title = document.getElementById("product-title").value;
    const quantity = document.getElementById("product-quantity").value;
    const category = document.getElementById("product-category").value;
    if (!title || !quantity || !category) return;
    Storage.saveproducts({ title, quantity, category });
    this.products = Storage.getAllproducts();
    this.createProductList();
  }
  setApp() {
    this.products = Storage.getAllproducts();
  }
  createProductList() {
    let result = ``;
    this.products.forEach((el) => {
      let categoryid= Storage.getAllCategories().find(e=>{ return e.id == el.category})
    console.log(categoryid);
      result += `
      
      <div class="d-flex justify-content-between mt-3">
      <span class="text-white  fonts">${el.title}</span>
        <span class="text-white fonts">${new Date().toLocaleDateString("fa-IR")}</span>
        <div class="text-white fonts bg-secondary rounded-5 px-3 text-center">${categoryid.title}</div>
        <div class="text-white fonts">${el.quantity}</div>
        <button type="button" class="btn btn-outline-danger">Delete</button>
        </div>
      `;
    });
    document.getElementById("product-list").innerHTML = result;
  }
}

export default new productView();

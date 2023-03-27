import Storage from "./Storage";
const addnewproductbtn = document.getElementById("add-new-product");

class productView {
  constructor() {
    addnewproductbtn.addEventListener("click", this.addnewproduct());
    this.products = [];
  }
  addnewproduct() {
    const title = document.getElementById("product-title").value;
    const quantity = document.getElementById("product-quantity").value;
    const category = document.getElementById("product-category").value;
    if (!title || !quantity || !category) return;
    Storage.saveproducts({ title, quantity, category });
    this.products = Storage.getAllproducts();
  }
  setApp() {
    this.products = Storage.getAllproducts();
  }
}

export default new productView();

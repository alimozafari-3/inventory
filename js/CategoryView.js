import Storage from "./Storage.js";

const categoryTitle = document.querySelector("#category-title");
const categoryDescription = document.querySelector("#category-description");
const addNewCetgoryBtn = document.querySelector("#add-new-category");

class CategoryView {
  constructor() {
    addNewCetgoryBtn.addEventListener("click", (e) => this.addNewCategory(e));
    this.categories = [];
  }

  addNewCategory(e) {
    e.preventDefault();
    const title = categoryTitle.value;
    const description = categoryDescription.value;
    if (!title || !description) return;
    Storage.savecategory({ title, description });
    this.categories = Storage.getAllCategories();

    this.createCategoriesList();
    console.log(Storage.getAllCategories());
  }
  setApp() {
    this.categories = Storage.getAllCategories();
  }
  createCategoriesList() {
    let result = `<option value="3">Three</option>`;
    this.categories.forEach((element) => {
      result += `<option value=${element.id}>${element.title}</option>`;
    });
    document.getElementById("product-category").innerHTML = result;
  }
}
export default new CategoryView();

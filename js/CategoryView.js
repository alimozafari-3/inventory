import Storage from "./Storage.js";

const categoryTitle = document.querySelector("#category-title");
const categoryDescription = document.querySelector("#category-description");
const addNewCetgoryBtn = document.querySelector("#add-new-category");

class CategoryView {
  constructor() {
    addNewCetgoryBtn.addEventListener("click", (e)=> this.addNewCategory());
    this.categories = [];
  }
  addNewCategory() {
    alert("add category")
    const title = categoryTitle.value;
    const description = categoryDescription.value;
    if (!title || !description) return;
    Storage.savecategory({ title, description });
    this.categories = Storage.getAllCategories();
    this.createCategoriesList();
  }
  setApp() {
    this.categories = Storage.getAllCategories();
  }
  createCategoriesList() {
    let result = `<option value="0">one</option>`;
    this.categories.forEach((el) => {
      result += `<option value="${el.id}">${el.title}</option>`;
    });
    document.getElementById("product-category").innerHTML = result;
  }
}
export default new CategoryView();

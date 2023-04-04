import Storage from "./Storage.js";

const categoryTitle = document.querySelector("#category-title");
const categoryDescription = document.querySelector("#category-description");
const addNewCetgoryBtn = document.querySelector("#add-new-category");
const toggleaddcategorybtn=document.getElementById("toggle-add-category")
const categorywrapper=document.getElementById("category-wrapper")
class CategoryView {
  constructor() {
    addNewCetgoryBtn.addEventListener("click", (e)=> this.addNewCategory());
    toggleaddcategorybtn.addEventListener("click",(e)=>this.toggleaddcategory(e))
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
  toggleaddcategory(e){
    categorywrapper.classList.toggle("hidden")
   
  }
}
export default new CategoryView();

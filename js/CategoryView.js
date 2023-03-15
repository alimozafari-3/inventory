import Storage from "./Storage";

const title = document.querySelector("#categorytitle");
const description = document.querySelector("#categorydescription");
const addnewcategorybtn = document.querySelector("#add-new-category");

export default class CategoryView {
  constructor() {
    addnewcategorybtn.addEventListener("click", (e) => this.Addnewcategory(e));
  }
  Addnewcategory(e) {
    const title = title.value;
    const description = description.value;
    if (!title || !description) return;
    Storage.savecategory({title,description})
  }
}
import categoryView from "./CategoryView.js";
import productView from "./ProductView.js";
document.addEventListener("DOMContentLoaded", () => {
  categoryView.setApp();
  productView.setApp()
  categoryView.createCategoriesList();
  productView.createProductList(productView.products)
});

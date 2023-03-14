const categories = [
  {
    id: 1,
    title: "react",
    description: "front of application",
    createdAt: "2021-11-01t10:47:26.889z",
  },
  {
    id: 2,
    title: "frontend",
    description: "front of application",
    createdAt: "2021-10-01t10:47:26.889z",
  },
];
const products = [
  {
    id: 1,
    title: "frontend",
    description: "front of application",
    createdAt: "2021-11-01t10:41:26.889z",
  },
  {
    id: 2,
    title: "vue",
    description: "front of application",
    createdAt: "2021-10-01t10:42:25.888z",
  },
  {
    id: 3,
    title: "java",
    description: "front of application",
    createdAt: "2021-9-01t10:47:26.786z",
  },
];

export default class Storage {
  static getAllCategories() {
    const savedcategories = JSON.parse(localStorage.getItem("category")) || [];
    return savedcategories.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
    });
  }
  static savecategory(tosave) {
    const savedcategoris = Storage.getAllCategories();
    const existed = savedcategoris.find((e) => {
      e.id === tosave.id;
    });
    if (existed) {
      //edit
      existed.title = tosave.title;
      existed.description = tosave.description;
    } else {
      //new add
      tosave.id = new Date().getTime();
      tosave.createdAt = new Date().toISOString();
      savedcategoris.push(tosave);
    }
    localStorage.setItem("category", JSON.stringify(savedcategoris));
  }
 
 static getAllproducts() {
    const savedcategories = JSON.parse(localStorage.getItem("products")) || [];
    return savedcategories.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
    });
  }
 static saveproducts(tosaveproduct) {
    const savedproduct = Storage.getAllproducts();
    const existed = savedproduct.find((e) => {
      e.id === tosaveproduct.id;
    });
    if (existed) {
      //edit
      existed.title = tosaveproduct.title;
      existed.quantity = tosaveproduct.quantity;
      existed.category = tosaveproduct.category;
    } else {
      //new add
      tosaveproduct.id = new Date().getTime();
      tosaveproduct.createdAt = new Date().toISOString();
      savedproduct.push(tosave);
    }
    localStorage.setItem("products", JSON.stringify(savedproduct));
  }
}

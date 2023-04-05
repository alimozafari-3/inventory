export default class Storage {
  static savecategory(tosave) {
    const savedcategoris = this.getAllCategories();
    const existed = savedcategoris.find((e) => {
      e.id === tosave.id;
    });
    if (existed) {
      existed.title = tosave.title;
      existed.description = tosave.description;
    } else {
      const saves = {
        title: tosave.title,
        description: tosave.description,
        id: new Date().getTime(),
        createdAt: new Date().toISOString(),
      };
      savedcategoris.push(saves);
    }
    localStorage.setItem("category", JSON.stringify(savedcategoris));
  }

  static getAllCategories() {
    const savedcategories = JSON.parse(localStorage.getItem("category")) || [];
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
      const saves = {
        title: tosaveproduct.title,
        quantity: tosaveproduct.quantity,
        category: tosaveproduct.category,
        id: new Date().getTime(),
        createdAt: new Date().toISOString(),
      };
      savedproduct.push(saves);
    }
    localStorage.setItem("products", JSON.stringify(savedproduct));
  }
  static getAllproducts(sort = "newest") {
    const savedcategories = JSON.parse(localStorage.getItem("products")) || [];
    return savedcategories.sort((a, b) => {
      if (sort === "newest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else {
        if (sort === "oldest") {
          return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
        }
      }
    });
  }
  static deleteproduct(id) {
    const savedproduct = this.getAllproducts();
    const filterproducts = savedproduct.filter((e) => e.id !== parseInt(id));
    localStorage.setItem("products", JSON.stringify(filterproducts));
  }
}

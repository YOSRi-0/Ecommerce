const sql = require("./db.js");

const Category = function (category) {
  this.main_category = category.mainCategory;
  this.submain_category = category.subCategory;
  this.image = category.image;
};

Category.create = (newCategory, result) => {
  sql.query("INSERT INTO categories SET ?", newCategory, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("created category", { ...newCategory });
    result(null, { ...newCategory });
  });
};

Category.update = (id, category, result) => {
  sql.query(
    "UPDATE categories SET ? WHERE id_category = ?",
    [category, id],
    (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(err, null);
        return;
      }

      if (res.affectedRows === 0) {
        console.log("Category not found");
        result({ kind: "not_found" }, null);
      }

      console.log("Category has been updated successfully");
      console.log(res);
      result(null, { ...category });
    }
  );
};

Category.remove = (id, result) => {
  sql.query("DELETE FROM categories WHERE id_category = ?", id, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    if (res.affectedRows === 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("delete category with id", id);
    result(null, res);
  });
};

Category.findAll = (result) => {
  sql.query("SELECT * FROM categories", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log(res);
    result(null, res);
  });
};

module.exports = Category;

const sql = require("./db");

const Color = function (color) {
  this.colorId = color.colorId;
  this.name = color.name;
};

Color.create = ({ name }, result) => {
  // Validate body
  sql.query("INSERT INTO colors SET name = ?", name, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("created color ", name);
    result(null, name);
  });
};

Color.addColorToProduct = (colorId, productId, result) => {
  sql.query(
    "INSERT INTO color_product SET id_color = ?, id_product = ?",
    [colorId, productId],
    (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(err, null);
        return;
      }

      console.log(`added ${colorId} to product ${productId}`);
      result(null, { colorId, productId });
    }
  );
};

Color.getColors = (result) => {
  sql.query("SELECT * FROM colors", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    if (res.length === 0) {
      console.log("no colors found");
      result({ kind: "not_found" }, null);
      return;
    }

    result(null, res);
  });
};

module.exports = Color;

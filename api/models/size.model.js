const sql = require("./db");

const Size = function (size) {
  this.sizeId = size.sizeId;
  this.name = size.name;
};

Size.create = ({ name }, result) => {
  // Validate body
  sql.query("INSERT INTO sizes SET name = ?", name, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("created size ", name);
    result(null, name);
  });
};

Size.addSizeToProduct = (sizeId, productId, result) => {
  sql.query(
    "INSERT INTO size_product SET id_size = ?, id_product = ?",
    [sizeId, productId],
    (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(err, null);
        return;
      }

      console.log(`added ${sizeId} to product ${productId}`);
      result(null, { sizeId, productId });
    }
  );
};

Size.getSizes = (result) => {
  sql.query("SELECT * FROM sizes", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    if (res.length === 0) {
      console.log("no sizes found");
      result({ kind: "not_found" }, null);
      return;
    }

    result(null, res);
  });
};

module.exports = Size;

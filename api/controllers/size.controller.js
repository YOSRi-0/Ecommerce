const Size = require("../models/size.model");

// Create and save newSize
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "content can not be empty" });
  }

  const size = new Size({
    name: req.body.name,
  });

  // Save Size in the db
  Size.create(size, (err, data) => {
    if (err) {
      res.status(500).json({
        message: err.message || "Some error occured while creating the size",
      });
    } else {
      res.json(data);
    }
  });
};

exports.addSizeToProduct = (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "content can not be empty" });
  }

  const sizeId = req.body.sizeId;
  const productId = req.body.productId;
  Size.addSizeToProduct(sizeId, productId, (err, data) => {
    if (err) {
      return res.status(500).json({
        message:
          err.message || "Some error occurred while adding size to product",
      });
    } else {
      return res.json(data);
    }
  });
};

exports.getSizes = (req, res) => {
  Size.getSizes((err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(400).json({
          message: err.kind || "some error occured while removing the product",
        });
      } else {
        return res.status(500).json({
          message:
            err.message || "some error occured while removing the product",
        });
      }
    } else {
      res.json(data);
    }
  });
};

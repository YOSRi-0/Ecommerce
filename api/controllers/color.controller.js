const Color = require("../models/color.model");

// Create and save new Color
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "content can not be empty" });
  }

  const color = new Color({
    name: req.body.name,
  });

  // Save Color in the db
  Color.create(color, (err, data) => {
    if (err) {
      res.status(500).json({
        message: err.message || "Some error occured while creating the color",
      });
    } else {
      res.json(data);
    }
  });
};

exports.addColorToProduct = (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "content can not be empty" });
  }

  const colorId = req.body.colorId;
  const productId = req.body.productId;
  Color.addColorToProduct(colorId, productId, (err, data) => {
    if (err) {
      return res.status(500).json({
        message:
          err.message || "Some error occurred while adding color to product",
      });
    } else {
      return res.json(data);
    }
  });
};

exports.getColors = (req, res) => {
  Color.getColors((err, data) => {
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

module.exports = (app) => {
  const color = require("../controllers/color.controller");

  // Get colors
  app.get("/colors", color.getColors);

  // create Color
  app.post("/colors", color.create);

  // add color to product
  app.post("/colors/add", color.addColorToProduct);
};

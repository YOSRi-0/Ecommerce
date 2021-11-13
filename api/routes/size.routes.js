module.exports = (app) => {
  const size = require("../controllers/size.controller");

  // Get sizes
  app.get("/sizes", size.getSizes);

  // create Size
  app.post("/sizes", size.create);

  // add size to product
  app.post("/sizes/add", size.addSizeToProduct);
};

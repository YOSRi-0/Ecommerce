const { verifyTokenAndAdmin } = require("./verifyToken.js");

module.exports = (app) => {
  const categories = require("../controllers/category.controller");

  app.post("/categories", categories.create);

  app.put("/categories/:id", categories.update);

  app.delete("/categories/:id", categories.delete);

  app.get("/categories", categories.getAll);
};

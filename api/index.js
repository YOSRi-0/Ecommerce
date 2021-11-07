const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/user.routes.js")(app);
require("./routes/product.routes.js")(app);
require("./routes/cart.routes.js")(app);

const port = process.env.PORT;
app.listen(port || 5000, () => console.log(`listing on port ${port}`));

const express = require('express');
const app = express();
const cors = require('cors');
// const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/user.routes.js')(app);
require('./routes/product.routes.js')(app);
require('./routes/cart.routes.js')(app);
require('./routes/order.routes.js')(app);
require('./routes/auth.routes.js')(app);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listing on port ${port}`));

const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const test = require("./Router/test");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/test", test);

const port = 5000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});
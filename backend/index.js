const express = require('express');
const cors = require("cors");
const app = express();
const bodyparser = require("body-parser")
const mainRouter = require("./router/index");


app.use(cors());
app.use(bodyparser.json());

// Single routing
app.use("/api/v1",mainRouter);

app.listen(3000,() => console.log("running"));


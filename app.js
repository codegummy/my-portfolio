const express = require("express");
const expressLayout = require("express-ejs-layouts");
const myRouter = require("./router");
const app = express();
const PORT = 5000;

app.use(express.static("public"));

//templatiing 
app.use(expressLayout);
app.set("layout", "./layouts/main");

app.set("view engine", "ejs");


app.use("/", myRouter);

app.listen(PORT, console.log("Server is awake"));

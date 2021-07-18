const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// const staticPath = path.join(__dirname, "../public");

// Setting views directory
const staticPath = path.join(__dirname, "../views");
app.set("views", staticPath);

// Setting the view engine
app.set("view engine", "hbs");

// template engine route
app.get("/", (req, res) => {
  res.render("index");
});

// Built-in Middleware
// app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello from express server");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

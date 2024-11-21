//1 require express
const express = require("express");
//8 require fs
const fs = require("fs");

//5 require dotenv
require("dotenv").config();
//2 instance from express
const app = express();
//7 middleware
function display(req, res, next) {
  console.log("I'm a middleware");
  next();
}
app.use(display); //all routes
app.use(express.static("pages"));
// array
const Users = [
  {
    _id: 1,
    name: "youssef",
    email: "youssef@gamil.com",
  },
  {
    _id: 2,
    name: "Khaled",
    email: "khaled@gamil.com",
  },
  {
    _id: 3,
    name: "Ahmed",
    email: "Ahmed@gamil.com",
  },
  {
    _id: 4,
    name: "Slim",
    email: "Slim@gamil.com",
  },
  {
    _id: 5,
    name: "hamza",
    email: "hamza@gamil.com",
  },
  {
    _id: 6,
    name: "aziz",
    email: "aziz@gamil.com",
  },
  {
    _id: 7,
    name: "omar",
    email: "omar@gamil.com",
  },
];

//6 routes
app.get("/test", (req, res) => {
  res.send("<h1>You are welcome to Express JS</h1>");
});

app.get("/users", (req, res) => {
  res.send(Users);
});

app.get("/", (req, res) => {
  fs.readFile("./pages/index.html", (err, data) => {
    err ? console.log(err) : res.end(data);
  });
});
//3 PORT
const PORT = process.env.PORT || 7200;
//4 creation of server
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`The server is running on http://localhost:${PORT}`);
});

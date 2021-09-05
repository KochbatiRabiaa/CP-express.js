const express = require("express");

const app = express();
const port = 4000;
const path = require('path')
const homeRoute = require("./Views/Home/home");
const servicesRoute = require("./Views/Our_Services/Our_Services");
const contactRoute = require("./Views/Contact_us/Contact_us");

app.use(express.json());
app.use('/ressources',express.static(path.join(__dirname, "public")));

app.use('/css/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use('/css',express.static(path.join(__dirname, "css")));
const x = new Date();

app.use((req, res, next) => {

  if (
    x.getDay() === 0 || x.getDay() === 5 ||x.getHours() < 8 || x.getHours > 19 ) {
    res.send("OOPS, We are CLOSE. Try : Monday to Friday,  from 8 to 17");
  } else {
    next();
  }
});

app.use("/", homeRoute, function (req, res, next) {
  next();
});

app.use("/OurServices", servicesRoute, function (req, res, next) {
  next();
});

app.use("/ContactUs", contactRoute, function (req, res, next) {
  next();
});

app.listen(port, function () {
  console.log("The server is running");
});

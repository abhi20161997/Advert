const express = require("express");
const compression = require("compression");
const path = require("path");
const app = express();

app.use(compression());
app.use("/register", express.static(path.join(__dirname, "public")));

app.get("/register/getintouch", function (req, res) {
  res.sendFile(path.join(__dirname, "getintouch.html"));
});

app.get("/register/get-in-touch", function (req, res) {
  res.sendFile(path.join(__dirname, "get-in-touch.html"));
});

app.get("/register/get_in_touch", function (req, res) {
  res.sendFile(path.join(__dirname, "get_in_touch.html"));
});

app.get("/register/thankyou", function (req, res) {
  res.sendFile(path.join(__dirname, "thankyou.html"));
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

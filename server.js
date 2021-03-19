const express = require("express");
const compression = require("compression");
const path = require("path");
const app = express();

app.use(compression());
app.use("/getintouch", express.static(path.join(__dirname, "public")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "getintouch.html"));
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

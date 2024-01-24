const express = require("express");
const app = express();
const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("photos_upload");

app.post("/photos/upload",upload, async (req, res, next) => {
  res.send("File uploaded");
});

app.listen(5000);

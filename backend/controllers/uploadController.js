const uploadController = require("express").Router();

const multer = require("multer");
// const verifyToken = require("../middlewares/auth");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.filename);
  },
});

const upload = multer({
  storage: storage,
});

uploadController.post("/firstImg",  upload.single("firstImg"), async (req, res) => {
    try {
      return res.status(200).json("File uploaded successfully");
    } catch (error) {
      console.error(error);
    }
  });

  
  uploadController.post("/secondImg",  upload.single("secondImg"), async (req, res) => {
    try {
      return res.status(200).json("File uploaded successfully");
    } catch (error) {
      console.error(error);
    }
  });
  
module.exports = uploadController;
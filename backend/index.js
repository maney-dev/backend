require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const uploadController = require("./controllers/uploadController");
const app = express();
var bodyParser = require('body-parser')

// db connecting
mongoose.connect(process.env.MONGO_URL, () => console.log("Db is connected"));

// middlewares
app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// pour servir des images dans un dossier public
app.use('/images', express.static('public/images'));

app.use("/auth", authController);
app.use("/product", productController);
app.use('/upload', uploadController)

const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Server has been started on port ${port}`));
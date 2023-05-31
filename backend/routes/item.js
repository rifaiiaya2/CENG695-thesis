var express = require("express");
var router = express.Router();
var controller = require("../controllers/item");


var multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const DIR = "./public/images";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jfalsepg and .jpeg format allowed!"));
    }
  },
});





router.get("/", controller.getAll);
router.get("/:id", controller.getbyID);
router.post('/',upload.array("image", 4), controller.post)
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);
router.get("/itemsByBategory/:id", controller.getItemsByCategoryId);

module.exports = router;

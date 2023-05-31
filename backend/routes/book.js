var express = require("express");
var router = express.Router();
var controller = require("../controllers/book");

router.get("/", controller.getAll);
router.post("/", controller.post);
router.delete("/:id", controller.delete);

 
module.exports = router;

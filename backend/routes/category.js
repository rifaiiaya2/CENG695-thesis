var express = require("express");
var router = express.Router();
var controller = require("../controllers/category");


router.get("/", controller.getAll);
router.get("/:id", controller.getbyID);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;
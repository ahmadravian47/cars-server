const express = require("express");
const router = express.Router();
const {
  getCars,
  getCarsByType,
  getCarID,
} = require("../controllers/carControllers");

router.get("/usedcars", getCars);
router.get("/usedcars/:cartype", getCarsByType);
router.get("/car/:id", getCarID);

module.exports = router;

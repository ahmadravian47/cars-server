const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const verifyToken = require("../middleware/auth");
const {
  login,
  signup,
  postAd,
  myAds,
} = require("../controllers/userControllers");

router.post("/login", login);
router.post("/signup", signup);
router.post("/postad", verifyToken, upload.array("images[]"), postAd);
router.get("/myads/:id", verifyToken, myAds);

module.exports = router;

const express = require('express')
const router = express.Router();

const resetpasswordController = require("../controllers/resetpasswordController");

router.get("/forgotpassword", resetpasswordController.forgotpassword)
router.get("/checktoken", resetpasswordController.checktoken)
router.put("/resetpassword", resetpasswordController.resetpassword)

module.exports = router;

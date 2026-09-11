const express = require('express')
const router = express.Router();


const signupController = require("../controllers/signupController");
const { verifyjsontoken, verifyadmin } = require("../utils/auth");


router.post("/signup", signupController.signup)
router.put("/activateuseraccount", signupController.activateuseraccount)
router.post("/resendmail", signupController.resendmail)
router.post("/login", signupController.login)
router.put("/changepassword", signupController.changepassword)
router.post("/logout", signupController.logout)
router.post("/logout", signupController.logout)
router.get("/fetchoneuserdata/:useremail", signupController.fetchoneuserdata)
router.get("/fetchallusers", signupController.fetchallusers)
router.put("/updateuserprofile", signupController.updateuserprofile)
router.post("/contact", signupController.contact)
router.get("/fetchoneuser/:userid", signupController.fetchoneuser)
router.put("/updateoneuser", signupController.updateoneuser)
router.delete("/deluser", signupController.deluser)
router.get("/searchuser", signupController.searchuser)



module.exports = router;

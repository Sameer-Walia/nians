const express = require('express')
const router = express.Router();

const teacherController = require("../controllers/teacherController");

router.post("/addteacher", teacherController.addteacher)
router.get("/fetchallteachers", teacherController.fetchallteachers)
router.get("/fetchoneteacher", teacherController.fetchoneteacher)
router.put("/updateteacher", teacherController.updateteacher)
router.delete("/delteacher/:id", teacherController.delteacher)
router.get("/fetchallteacher", teacherController.fetchallteacher)
router.get("/fetchteachername/:nid", teacherController.fetchteachername)
router.get("/allteacherfeed", teacherController.allteacherfeed)
router.get("/fetchoneteacher_sub_code/:name" , teacherController.fetchoneteacher_sub_code)


module.exports = router;

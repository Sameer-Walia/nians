const express = require('express')
const router = express.Router();

const feedbackController  = require("../controllers/feedbackController");

router.post("/submitfeedback" , feedbackController.submitfeedback)
router.get("/uniquefeed/:name" , feedbackController.uniquefeed)
router.get("/getallfeedbacks" , feedbackController.getallfeedbacks)

module.exports = router;

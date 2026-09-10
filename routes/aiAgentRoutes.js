const express = require("express");
const router = express.Router();

const aiAgentController = require("../controllers/aiAgentController");

// Route to generate content with Claude agents
router.post("/generate", aiAgentController.generateAgentContent);

module.exports = router;
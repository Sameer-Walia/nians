const express = require('express')
const app = express()
app.use(express.json());
require("dotenv").config();

const port = process.env.PORT || 7000

const cors = require('cors')
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser")   // to read cookie for jwt
app.use(cookieParser());


const mongoose = require('mongoose');
const { type } = require('os');
// mongoose.connect(process.env.MONGO_URL).then(() => console.log("Connected to MongoDB on port " + port));
mongoose.connect('mongodb+srv://sameer:123@cluster0.e6krwcg.mongodb.net/nians?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('Connected to MongoDB'));


const signupRoutes = require('./routes/signupRoutes');
app.use('/api', signupRoutes)

const teacherRoutes = require('./routes/teacherRoutes');
app.use('/api', teacherRoutes)

const feedbackRoutes = require('./routes/feedbackRoutes');
app.use('/api', feedbackRoutes)

const resetpasswordRoutes = require('./routes/resetpasswordRoutes');
app.use('/api', resetpasswordRoutes)

const aiAgentRoutes = require("./routes/aiAgentRoutes");
app.use("/api/ai-agent", aiAgentRoutes);

app.listen(port, () =>
{
    console.log(`Server is running on port ${port}`)
})
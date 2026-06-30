const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRouters");
const issueRoutes = require("./routes/issueRouters");
const app = express();
connectDB();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/issues", issueRoutes);
const PORT = process.env.PORT;
app.get("/", (req, res) => {
    res.send("Welcome to Mini Issue Tracker API");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
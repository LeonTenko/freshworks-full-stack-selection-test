const express = require("express");
const connectDB = require("./config/db");

// Init express
const app = express();
// Connect to the database
connectDB();

// Init middleware to parse request body.
// Otherwise (res,req) doesn't see the request body.
app.use(express.json({ extended: false, limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb" }));

// Define routes
app.use("/api/duckfeedings", require("./routes/api/duckfeedings"));

// app.get("/", (req, res) => res.send("Test API running -> GET on /"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

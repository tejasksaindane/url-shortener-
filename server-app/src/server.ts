

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const port = process.env.PORT || 5001;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world!")
});

app.listen(port, () => {
    console.log(`Server started successfully on port: ${port}`);
})
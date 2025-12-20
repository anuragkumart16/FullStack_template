import config from "./config.js";
import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(config.port, () => {
    console.log(`Server is running on port http://localhost:${config.port}`)
})
import express from "express"
import cors from "cors"
import config from "./config"

const app = express()

app.use(cors({
    origin: config.allowed_origins,
    credentials: true
}))
app.use(express.json())




export default app


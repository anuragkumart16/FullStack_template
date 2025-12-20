import dotenv from "dotenv"
dotenv.config()

type Config = {
    port: number,
    node_env: string
}

const config: Config = {
    port: Number(process.env.PORT) || 8000,
    node_env: process.env.NODE_ENV || "development"
}

export default config

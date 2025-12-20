import dotenv from "dotenv";
dotenv.config();
const config = {
    port: Number(process.env.PORT) || 8000,
    node_env: process.env.NODE_ENV || "development"
};
export default config;
//# sourceMappingURL=config.js.map
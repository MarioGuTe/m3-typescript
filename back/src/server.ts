import express from "express";
import router from "./routes";

const server = express();

// Router
server.use(router);

export default server;

import express from "express";
import router from "./routes";

const server = express();

// turn data into js object
server.use(express.json());
// Router
server.use(router);

export default server;

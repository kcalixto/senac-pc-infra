import express from "express";
import * as route from "./routes.js"

const app = express();

app.use("/instances", route.instances)

export default app
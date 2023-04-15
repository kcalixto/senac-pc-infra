import express from "express";
import { startInstance } from "../functions/startec2.js";
import { stopInstance } from "../functions/stopec2.js";

const instances = express();
instances.get("/start/:id", (req, res) => {
    startInstance(id)
        .then(({ status, body }) => {
            res.status(status).json(body)
        })
})
instances.get("/stop/:id", (req, res) => {
    stopInstance(id)
        .then(({ status, body }) => {
            res.status(status).json(body)
        })
})

export {
    instances
}
import http from "http";
import express, { json } from "express";
import cors from "cors";
import { router } from "./router";

const app = express()
const server = new http.Server(app)

app.use(cors())
  .use(json())
  .use(router)

server.listen(process.env.PORT)
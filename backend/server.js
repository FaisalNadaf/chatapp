import express from "express";
import dotenv from "dotenv";
import path from "path";

import cookieParser from "cookie-parser";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import messageRouter from "./routes/messageRouter.js";

import mongoConnect from "./mongo_connect/mongoConnect.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 8080;

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  mongoConnect();
  console.log(`server in running on port ${PORT}`);
});

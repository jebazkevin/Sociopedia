import express from "express";
import { login } from "../controllers/auth.js";

const app = express.Router();

app.post("/login", login);

export default app;
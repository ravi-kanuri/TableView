import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app =express();
const PORT = process.env.PORT ; 

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );

app.use("/api/auth", authRoutes);


app.listen(PORT,()=>{
    console.log("Server is running on port 8000");
    connectDB();
});
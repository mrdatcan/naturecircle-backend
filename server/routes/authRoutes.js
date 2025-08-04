import express from "express";
import { register, login } from "../controllers/authController.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
import cors from "cors";

// Cho phép tất cả origin (hoặc origin cụ thể nếu muốn bảo mật hơn)
app.use(cors({
  origin: "*", // Hoặc ["http://localhost:5173", "https://tenmien-fe.com"]
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

export default router;

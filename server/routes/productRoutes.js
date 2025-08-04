import express from "express";
import { getProducts, getProductById, createProduct } from "../controllers/productController.js";
import cors from "cors";

// Cho phép tất cả origin (hoặc origin cụ thể nếu muốn bảo mật hơn)
app.use(cors({
  origin: "*", // Hoặc ["http://localhost:5173", "https://tenmien-fe.com"]
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct); // optional

export default router;

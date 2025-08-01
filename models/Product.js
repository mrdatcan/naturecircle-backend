import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  oldPrice: Number,
  image: String,
  rating: Number,
  description: String
}, { timestamps: true });

export default mongoose.model("Product", productSchema);

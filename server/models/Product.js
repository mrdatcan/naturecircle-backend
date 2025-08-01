import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  price: { type: Number, required: true },
  oldPrice: { type: Number },
  image: { type: String },
  rating: { type: Number, default: 0 },
  description: { type: String }
});

export default mongoose.model("Product", productSchema);

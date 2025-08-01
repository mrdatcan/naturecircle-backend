import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number },
    image: { type: String, required: true },
    rating: { type: Number, default: 0 },
    description: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);

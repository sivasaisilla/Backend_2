import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      required: true,
      type: String,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      default: 0,
      type: Number,
    },
    category:{
      type:mongoose.Schema.types.ObjectId,
      ref:"Category",
      required:true,
    },
    owner:{
      type:mongoose.Schema.types.ObjectId,
      ref:"User"
    }
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);

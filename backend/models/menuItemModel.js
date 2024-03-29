import mongoose from "mongoose";
import Ingredients from "./ingredientsModel.js";

const menuItemSchema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  modifications: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Ingridients" }],
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

export default MenuItem;

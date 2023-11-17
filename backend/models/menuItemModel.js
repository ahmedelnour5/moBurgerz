import mongoose from "mongoose";

const menuItemSchema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  modifications: [{ type: mongoose.SchemaTypes.ObjectId, ref: "ingridients" }],
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

export default MenuItem;

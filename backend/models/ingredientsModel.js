import mongoose from "mongoose";

const ingridientSchema = mongoose.Schema({
  name: String,
  category: String,
});

const Ingredients = mongoose.model("Ingredients", ingridientSchema);
export default Ingredients;

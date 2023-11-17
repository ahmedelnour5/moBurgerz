import mongoose from "mongoose";

const ingridientSchema = mongoose.Schema({
  name: String,
  category: String,
});

const Ingredients = mongoose.model("Ingridients", ingridientSchema);
export default Ingredients;

import mongoose from "mongoose";

const ingridientSchema = mongoose.Schema({
  name: String,
  category: String,
});

const Ingridients = mongoose.model("Ingridients", ingridientSchema);
export default Ingridients;

import mongoose from 'mongoose';

const menuItemSchema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;

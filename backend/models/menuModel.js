import mongoose from 'mongoose';

const menuSchema = mongoose.Schema({
  items: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'MenuItem' }],
});

const Menu = mongoose.model('Menu', menuSchema);
export default Menu;

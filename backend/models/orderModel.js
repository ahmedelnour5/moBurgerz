import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  items: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'MenuItem' }],
  subtotal: { type: Number, required: true },
  tax: { type: Number, required: true },
  total: { type: Number, required: true },
});

const Order = mongoose.model('Order', orderSchema);

export { Order };

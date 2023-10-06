import asyncHandler from 'express-async-handler';
import MenuItem from '../models/menuItemModel.js';

const getMenu = asyncHandler(async (req, res) => {
  const items = await MenuItem.find({});
  if (items) {
    res.status(200).json(items);
  } else {
    res.status(400).json({ message: 'Error loading menu' });
  }
});

export { getMenu };

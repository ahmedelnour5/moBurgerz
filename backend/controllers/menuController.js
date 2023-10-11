import asyncHandler from "express-async-handler";
import MenuItem from "../models/menuItemModel.js";
import Ingredients from "../models/ingredientsModel.js";

const getMenu = asyncHandler(async (req, res) => {
  const items = await MenuItem.find().sort({ category: 1 });
  if (items) {
    res.status(200).json(items);
  } else {
    res.status(400).json({ message: "Error loading menu" });
  }
});

const getOrderMenu = asyncHandler(async (req, res) => {
  const items = await MenuItem.find()
    .populate("modifications")
    .sort({ category: 1 });

  if (items) {
    res.status(200).json(items);
  } else {
    res.status(400).json({ message: "Error loading menu" });
  }
});

export { getMenu, getOrderMenu };

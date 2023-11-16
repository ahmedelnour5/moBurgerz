import asyncHandler from 'express-async-handler';
import Customer from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authCustomer = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const customer = await Customer.findOne({ email });

  if (customer && (await customer.matchPassword(password))) {
    generateToken(res, customer._id);

    res.json({
      _id: customer._id,
      name: customer.name,
      email: customer.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

const registerCustomer = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const customerExists = await Customer.findOne({ email });

  if (customerExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }
  const customer = await Customer.create({
    name,
    email,
    password,
  });

  generateToken(res, customer._id);
  if (customer) {
    res.status(201).json({
      _id: customer._id,
      name: customer.name,
      email: customer.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutCustomer = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getCustomerProfile = asyncHandler(async (req, res) => {
  res.json('get profile');
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateCustomerProfile = asyncHandler(async (req, res) => {
  res.json('update profile');
});

export {
  authCustomer,
  registerCustomer,
  logoutCustomer,
  getCustomerProfile,
  updateCustomerProfile,
};

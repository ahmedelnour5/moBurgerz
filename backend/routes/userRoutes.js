import express from 'express';
import {
  authCustomer,
  registerCustomer,
  getCustomerProfile,
  logoutCustomer,
  updateCustomerProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/', registerCustomer);
router.post('/auth', authCustomer);
router.post('/logout', logoutCustomer);
router
  .route('/profile')
  .get(protect, getCustomerProfile)
  .put(protect, updateCustomerProfile);

export default router;

import { Router } from 'express';
import {
  getProducts,
  addProduct,
  modifyProduct,
  deleteProduct,
  uploadProductPic,
  getProductReviews,
} from '../controllers/products.js';
import { validateProduct } from '../middlewares/validation/productsValidation.js';

const router = Router();

router.route('/').get(getProducts).post(validateProduct, addProduct);

router.route('/:id').put(validateProduct, modifyProduct).delete(deleteProduct);

router.route('/:id/upload').post(uploadProductPic);

router.route('/:id/reviews').get(getProductReviews);

export default router;

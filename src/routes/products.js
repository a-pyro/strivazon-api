import { Router } from 'express';
import {
  getProducts,
  addProduct,
  modifyProduct,
  deleteProduct,
  uploadProductPic,
  getProductReviews,
} from '../controllers/products.js';

const router = Router();

router.route('/').get(getProducts).post(addProduct);

router.route('/:id').put(modifyProduct).delete(deleteProduct);

router.route('/:id/upload').post(uploadProductPic);

router.route('/:id/reviews').get(getProductReviews);

export default router;

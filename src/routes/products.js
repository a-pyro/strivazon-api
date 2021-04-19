import { Router } from 'express';
import {
  getProducts,
  addProduct,
  modifyProduct,
  deleteProduct,
  uploadProductPic,
  getProductReviews,
  getProductsByQuery,
} from '../controllers/products.js';
import {
  multerValidation,
  validateProduct,
} from '../middlewares/validation/productsValidation.js';
const upload = multerValidation();
const router = Router();

router
  .route('/')
  .get(getProductsByQuery, getProducts)
  .post(validateProduct, addProduct);

router.route('/:id').put(validateProduct, modifyProduct).delete(deleteProduct);

router.route('/:id/upload').post(upload, uploadProductPic);

router.route('/:id/reviews').get(getProductReviews);

export default router;

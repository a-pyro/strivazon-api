import { Router } from 'express';
import {
  getReviews,
  addReview,
  modifyReview,
  deleteReview,
} from '../controllers/reviews.js';

const router = Router();

router.route('/').get(getReviews).post(addReview);

router.route('/:id').put(modifyReview).delete(deleteReview);

export default router;

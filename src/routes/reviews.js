import { Router } from "express";
import {
  getReviews,
  addReview,
  modifyReview,
  deleteReview,
} from "../controllers/reviews.js";
import {
  validateReview,
  schemaReview,
} from "../middlewares/validation/reviewValidation.js";

const router = Router();

router.route("/").get(getReviews).post(schemaReview, addReview);

router.route("/:id").put(validateReview, modifyReview).delete(deleteReview);

export default router;

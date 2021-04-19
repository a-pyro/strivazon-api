import { Router } from "express";
import {
  getReviews,
  addReview,
  modifyReview,
  deleteReview,
} from "../controllers/reviews.js";
import { validateReview } from "../middlewares/validation/reviewValidation.js";

const router = Router();

router.route("/").get(getReviews).post(validateReview, addReview);

router.route("/:id").put(validateReview, modifyReview).delete(deleteReview);

export default router;

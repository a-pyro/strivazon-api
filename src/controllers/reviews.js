import { v4 as uuidv4 } from 'uuid';
import { fetchReviews, writeReviews } from '../utils/fsUtils.js';

// @desc    Get all reviews
// @route   GET /reviews/:id
export const getReviews = async (req, res, next) => {
  try {
    const reviews = await fetchReviews();

    res.status(200).send(reviews);
  } catch (error) {
    console.log(error);
  }
};

// @desc    add review
// @route   POST /reviews

export const addReview = async (req, res, next) => {
  try {
    const reviews = await fetchReviews();

    const newReview = {
      _id: uuidv4(),
      ...req.body,
      //   productId: req.body._id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    reviews.push(newReview);

    await writeReviews(reviews);

    res.status(201).send({ _id: newReview._id });
  } catch (error) {
    console.log(error);
  }
};

// @desc    modify  review
// @route   PUT /reviews/:id

export const modifyReview = async (req, res, next) => {
  try {
    const reviews = await fetchReviews();

    const findReview = reviews.filter((review) => review._id !== req.params.id);

    const modifiedReview = {
      ...req.body,
      _id: req.params.id,
      updatedAt: new Date(),
    };

    findReview.push(modifiedReview);

    await writeReviews(findReview);

    res.status(201).send('Edited successful', { _id: modifiedReview._id });
  } catch (error) {
    console.log(error);
  }
};

// @desc    delete review
// @route   DELETE /reviews/:id

export const deleteReview = async (req, res, next) => {
  try {
    const reviews = await fetchReviews();

    const findReview = reviews.filter((review) => review._id !== req.params.id);

    await writeReviews(findReview);

    res.status(204).send();
  } catch (error) {
    console.log(error);
  }
};

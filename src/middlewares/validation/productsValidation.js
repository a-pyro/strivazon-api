import { check, validationResult } from 'express-validator';
import ErrorResponse from '../../utils/errorResponse.js';

export const validateProduct = [
  check('name').trim().notEmpty().withMessage('name cannot be empty'),
  check('description')
    .trim()
    .notEmpty()
    .withMessage('description cannot be empty'),
  check('brand').trim().notEmpty().withMessage('brand cannot be empty'),
  check('price').notEmpty().withMessage('price cannot be empty'),
  check('category').trim().notEmpty().withMessage('category cannot be empty'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new ErrorResponse(
        `Something went wrong with validation`,
        400,
        'productValidation'
      );
      error.errList = errors.errors;
      return next(error);
    }
    next();
  },
];

import { check, checkSchema, validationResult } from 'express-validator';
import ErrorResponse from '../../utils/errorResponse.js';
import multer from 'multer';
import { extname } from 'path';

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

export const multerValidation = (req, res, next) => {
  const upload = multer({
    fileFilter: function (req, file, cb) {
      const acceptedExt = ['.png', '.jpg', '.gif', '.bmp', '.jpeg'];
      if (!acceptedExt.includes(extname(file.originalname))) {
        return cb(
          new ErrorResponse(
            `Image type not allowed: ${extname(file.originalname)}`,
            400,
            'multerExt'
          )
        );
      }
      cb(null, true);
    },
  });
  return upload.single('productPic');
};

// const productSchema = {
//   name: 'iPhone 13',
//   description: 'straight from the future',
//   brand: 'apple',
//   price: 1000,
//   category: 'smartphones',
// };

// export const validateProductSchema = (req, res, next) => {
//   checkSchema()
// }

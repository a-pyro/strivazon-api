import { v4 as uuidv4 } from 'uuid';
import { fetchProducts } from '../utils/fsUtils.js';

// @desc    Get all products
// @route   GET /products
export const getProducts = async (req, res, next) => {
  res.send({ hi: 'hiiiiii' });
};

// @desc    add product
// @route   POST /products

export const addProduct = async (req, res, next) => {
  try {
    const products = await fetchProducts();
    const newProduct = { ...req.body, _id: uuidv4(), createdAt: new Date() };
    console.log(products);
    // const productAlreadyPresent = products.some(prod => prod._id === new)
    res.send({ ...newProduct });
  } catch (error) {
    return next(error);
  }
};

// @desc    modify  product
// @route   PUT /products/:id

export const modifyProduct = async (req, res, next) => {};

// @desc    delete product
// @route   DELETE /products/:id

export const deleteProduct = async (req, res, next) => {};

// @desc    add image to product
// @route   POST /products/:id/upload
export const uploadProductPic = async (req, res, next) => {};

// @desc    get reviews for a product
// @route   GET /products/:id/reviews
export const getProductReviews = async (req, res, next) => {};

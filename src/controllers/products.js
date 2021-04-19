import { v4 as uuidv4 } from 'uuid';
import ErrorResponse from '../utils/errorResponse.js';
import { fetchProducts, writeProducts } from '../utils/fsUtils.js';

// @desc    Get all products
// @route   GET /products
export const getProducts = async (req, res, next) => {
  const products = await fetchProducts();
  res.status(200).send({ success: true, data: products });
};

// @desc    add product
// @route   POST /products

export const addProduct = async (req, res, next) => {
  try {
    const products = await fetchProducts();
    const newProduct = {
      ...req.body,
      _id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    console.log(products);
    // const productAlreadyPresent = products.some(prod => {
    //   if(prod.name.LowerCase() === newProduct.name.toLowerCase() || )
    // })
    products.push(newProduct);
    await writeProducts(products);
    res.status(201).send({ success: true, _id: newProduct._id });
  } catch (error) {
    return next(error);
  }
};

// @desc    modify  product
// @route   PUT /products/:id

export const modifyProduct = async (req, res, next) => {
  const products = await fetchProducts();
  let modifiedProduct;

  if (products.some((prod) => prod._id === req.params.id)) {
    const newProducts = products.reduce((acc, cv) => {
      if (cv._id === req.params.id) {
        modifiedProduct = { ...cv, ...req.body, updatedAt: new Date() };
        acc.push(modifiedProduct);
        return acc;
      }
      acc.push(cv);
      return acc;
    }, []);

    await writeProducts(newProducts);
    res.status(200).send({ success: true, data: modifiedProduct });
  } else {
    next(new ErrorResponse('Product not found', 404));
  }
};

// @desc    delete product
// @route   DELETE /products/:id

export const deleteProduct = async (req, res, next) => {
  const products = await fetchProducts();
  if (products.some((prod) => prod._id === req.params.id)) {
    const newProducts = products.filter((prod) => prod._id !== req.params.id);
    res.status(200).send({ success: true, message: 'product removed' });
    await writeProducts(newProducts);
  } else {
    next(new ErrorResponse('Product not found', 404));
  }
};

// @desc    add image to product
// @route   POST /products/:id/upload
export const uploadProductPic = async (req, res, next) => {};

// @desc    get reviews for a product
// @route   GET /products/:id/reviews
export const getProductReviews = async (req, res, next) => {};

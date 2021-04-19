export const errorHandler = (err, req, res, next) => {
  if (err.origin === 'multerExt') {
    return res.status(err.statusCode).send({
      success: false,
      message: err.message,
    });
  }

  if (err.field && err.field !== 'productPic') {
    return res.status(400).send({
      success: false,
      message: `productPic expected as fieldname, you sent ${err.field}`,
    });
  }

  if (err.origin === 'productValidation') {
    return res
      .status(err.statusCode)
      .send({ success: false, message: err.message, errors: err.errList });
  }

  if (!err.statusCode) {
    return res.status(500).send({
      success: false,
      message: 'internal server error',
    });
  }

  res.status(err.statusCode).send({ success: false, message: err.message });
};

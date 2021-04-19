export const errorHandler = (err, req, res, next) => {
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
};

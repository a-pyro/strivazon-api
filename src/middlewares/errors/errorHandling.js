export const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode).send({ success: false, message: err.message });

  if (!err.statusCode) {
    res.status(500).send({
      success: false,
      message: 'internal server error',
    });
  }
};

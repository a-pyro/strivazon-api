const multerValidation = (req, res, next) => {
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
export default multerValidation;

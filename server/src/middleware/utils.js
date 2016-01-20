export const errorHandler = function(err, req, res) {
  // res.status(500).send({error: err.message});
}

export const errorLogger = function(err, req, res, next) {
  console.error(err.stack)
  next(err);
}

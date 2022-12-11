module.exports = (error, req) => {
  req.status(error.status || 500);
  req.json({
    error: {
      message: error.message || 'Interval Server Error',
    },
  });
};

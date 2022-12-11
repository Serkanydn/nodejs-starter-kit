class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }

  static notFound(message = 'There is no such record.') {
    this.message = message;
    this.status = 404;
  }
}

module.exports = ApiError;

// errorHandler.js
class ErrorHandler extends Error {
  constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;

      // Capture the stack trace (useful for debugging)
      Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;

module.exports = {
  errorHandler: function() {
    return function* (next) {
      try {
        yield next;
      } catch (err) {
        this.status = 500;
        this.body = 'internal server error'
      }
    }
  }
}
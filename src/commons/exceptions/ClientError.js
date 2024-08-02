class ClientError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    
    if (this.constructor.name === 'ClientError') {
      throw new Error('ClientError cannot be instantiated directly');
    }

    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = ClientError;
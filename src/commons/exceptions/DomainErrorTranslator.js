const InvariantError = require("./InvariantError");

const DomainErrorTranslator = {
  translate(error) {
    return DomainErrorTranslator._directories[error.message] || error;
  },
};

DomainErrorTranslator._directories = {
  "POST_ALBUM.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
    "property that needed is not provided"
  ),
  "POST_ALBUM.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
    "data type is not meet the specification"
  ),
  "POSTED_ALBUM.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
    "property that needed is not provided"
  ),
  "POSTED_ALBUM.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
    "data type is not meet the specification"
  ),
};

module.exports = DomainErrorTranslator;
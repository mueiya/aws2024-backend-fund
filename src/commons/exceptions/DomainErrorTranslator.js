const InvariantError = require("./InvariantError");

const DomainErrorTranslator = {
  translate(error) {
    return DomainErrorTranslator._directories[error.message] || error;
  },
};

DomainErrorTranslator._directories = {
  // Albums
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
  "PUT_ALBUM.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
    "property that needed is not provided"
  ),
  "PUT_ALBUM.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
    "data type is not meet the specification"
  ),
  "GET_ALBUM.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
    "property that needed is not provided"
  ),
  "GET_ALBUM.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
    "data type is not meet the specification"
  ),
  // Songs
  "POST_SONG.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
    "property that needed is not provided"
  ),
  "POST_SONG.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
    "data type is not meet the specification"
  ),
  "POSTED_SONG.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
    "property that needed is not provided"
  ),
  "POSTED_SONG.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
    "data type is not meet the specification"
  ),
  "PUT_SONG.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
    "property that needed is not provided"
  ),
  "PUT_SONG.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
    "data type is not meet the specification"
  ),
  "GET_SONG.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
    "property that needed is not provided"
  ),
  "GET_SONG.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
    "data type is not meet the specification"
  ),
  "GET_ALBUM.SONGS_NOT_ARRAY": new InvariantError(
    "songs must be an array"
  ),
  "GET_ALBUM.ITEMS_NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
    "items in songs must be an instance of GetSongs"
  ),
};

module.exports = DomainErrorTranslator;
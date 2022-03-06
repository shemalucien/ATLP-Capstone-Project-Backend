"use strict";

require("./database");

var _express = _interopRequireDefault(require("express"));

var _query = _interopRequireDefault(require("./routes/query.route"));

var _auth = _interopRequireDefault(require("./routes/auth.route"));

var _blog = _interopRequireDefault(require("./routes/blog.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = (0, _express.default)(); // default route

server.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "You successfully landed on My Portfolio API"
  });
});
server.use(_express.default.json());
server.use('/api/v1/queries', _query.default);
server.use('/api/v1/auth', _auth.default);
server.use('/api/v1/blogs', _blog.default);
const port = 3500;
server.listen(port, () => {
  console.log("Server listening on port " + port);
});
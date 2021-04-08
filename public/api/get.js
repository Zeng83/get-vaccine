"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const get = (_ref) => {
  let {
    url,
    headers
  } = _ref;
  return (0, _nodeFetch.default)(url, {
    method: "GET",
    headers
  }).then(response => response.json());
};

var _default = get;
exports.default = _default;
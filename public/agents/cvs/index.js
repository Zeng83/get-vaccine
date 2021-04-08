"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUpdates = exports.onCallApi = void 0;

require("core-js/modules/web.dom.iterable.js");

var _post = _interopRequireDefault(require("../../api/post"));

var _constants = require("./constants");

var _payload = require("./payload");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onCallApi = zipcode => (0, _post.default)({
  url: _constants.url,
  headers: (0, _payload.getHeaders)(),
  body: (0, _payload.getBoday)(zipcode)
});

exports.onCallApi = onCallApi;

const getUpdates = () => Promise.all(_constants.zipcodes.map(zipcode => onCallApi(zipcode))).then(data => data.filter(location => location.responseMetaData.statusCode === '0000').map(data => data.responsePayloadData).reduce((arr, payload) => {
  return [...arr, ...payload.locations];
}, []).find(location => location.mfrName !== _constants.BRAND.MDA && location.mfrName !== _constants.BRAND.PF));

exports.getUpdates = getUpdates;
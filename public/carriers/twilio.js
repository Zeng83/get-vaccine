"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onSendMsg = void 0;

var _twilio = _interopRequireDefault(require("twilio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN
} = process.env;

const onSendMsg = msg => {
  (0, _twilio.default)(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN).messages.create({
    body: msg,
    from: '+14156123508',
    to: '+14084750113'
  }).then(message => console.log(message.sid)).catch(error => {
    console.log(error);
  });
};

exports.onSendMsg = onSendMsg;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "sendTwilioSms", {
  enumerable: true,
  get: function get() {
    return _twilio.onSendMsg;
  }
});

var _twilio = require("./twilio");
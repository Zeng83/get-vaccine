"use strict";

var _carriers = require("./carriers");

var _cvs = require("./agents/cvs");

const onCallUpdate = async () => {
  const result = await (0, _cvs.getUpdates)();

  if (result) {
    console.log(result.addressZipCode);
    const msg = "".concat(result.addressZipCode, " is available, pls login https://www.cvs.com/vaccine/intake/store/covid-screener/covid-qns"); // sendTwilioSms(msg);
  } else {
    console.log('bad lucky');
  }
};

const triggerSchedule = () => {
  setTimeout(() => {
    onCallUpdate(); // triggerSchedule();
  }, 1000);
};

triggerSchedule();
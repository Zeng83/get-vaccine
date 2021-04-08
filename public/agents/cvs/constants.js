"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BRAND = exports.zipcodes = exports.url = void 0;
const url = "https://www.cvs.com/Services/ICEAGPV1/immunization/1.0.0/getIMZStores";
exports.url = url;
const zipcodes = ['94560', '94112', '94521', '94538', '94616', '94708', '94111', '93657'];
exports.zipcodes = zipcodes;
const BRAND = {
  PF: 'Pfizer',
  MDA: 'Moderna'
};
exports.BRAND = BRAND;
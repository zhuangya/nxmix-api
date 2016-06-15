'use strict';

const EventEmitter = require('events');

const got = require('got');
const nxHeader = require('nxmix-auth-header');
const qs = require('qs');
const dateFns = require('date-fns');

module.exports = function (pKey, pSecret) {
  return class NextDay extends EventEmitter {
    constructor(apibase='http://api.nextday.im/api') {
      super();

      this.pKey = pKey;
      this.pSecret = pSecret;
      this.apibase = apibase;
    }

    request(url) {
      return got(url, {
        headers: nxHeader(this.pKey, this.pSecret, url),
        json: true
      })
    }

    calendar(from, to, without) {
      from = formatDate(from);
      to = formatDate(to);

      return this.request(`${this.apibase}/calendar?${qs.stringify({from, to, without})}`);
    }
  };
};

function formatDate(d) {
  return dateFns.format(d, 'YYYYMMDD');
}

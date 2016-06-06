'use strict';

const EventEmitter = require('events');

const got = require('got');
const nxHeader = require('nxmix-auth-header');
const qs = require('qs');
const dateFns = require('date-fns');

module.exports = function (pName, pKey) {
	return class NextDay extends EventEmitter {
		constructor(apibase='http://api.nextday.im/api') {
			super();

			this.pName = pName;
			this.pKey = pKey;
      this.apibase = apibase;
		}

		request(url) {
			return got(url, {
				headers: nxHeader(this.pName, this.pKey, url)
			})
		}

    calendar(from, to, without) {
      return this.request(`${this.apibase}/calendar?${qs.stringify({from, to, without})}`);
    }
	};
};

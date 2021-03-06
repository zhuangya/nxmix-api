'use strict';

import test from 'ava';
import got from 'got';
import {addDays} from 'date-fns';

import nxmixCrafter from '..';

const PARTNER_KEY = process.env.partnerKey;
const PARTNER_SECRET = process.env.partnerSecret

const Nxmix = nxmixCrafter(PARTNER_KEY, PARTNER_SECRET);

const nxmix = new Nxmix();

test('server api should return response with 200 status code', async t => {
  await nxmix.calendar(addDays(new Date(), -3), addDays(new Date(), -1)).then(resp => {
    t.is(resp.statusCode, 200);
    t.is(resp.body.status, 'OK');
  });
});

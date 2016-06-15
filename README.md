#nxmix-api

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

just an api wrapper for nxmix

Usage

```javascript

'use strict';

const NXAPI = require('.')('foo', 'bar');

const nx = new NXAPI();

nx.calendar(20130401, 20130604).then(res => console.log(res.body));

```


[npm-image]: https://img.shields.io/npm/v/nxmix-api.svg?style=flat-square
[npm-url]: https://npmjs.org/package/nxmix-api
[travis-image]: https://img.shields.io/travis/zhuangya/nxmix-api.svg?style=flat-square
[travis-url]: https://travis-ci.org/zhuangya/nxmix-api
[david-image]: http://img.shields.io/david/zhuangya/nxmix-api.svg?style=flat-square
[david-url]: https://david-dm.org/zhuangya/nxmix-api
[license-image]: http://img.shields.io/npm/l/nxmix-api.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/nxmix-api.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/nxmix-api

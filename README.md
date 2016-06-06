#nxmix-api

just an api wrapper for nxmix

Usage

```javascript

'use strict';

const NXAPI = require('.')('foo', 'bar');

const nx = new NXAPI();

nx.calendar(20130401, 20130604).then(res => console.log(res.body));

```

TODO:

- [ ] testing partner key/secret

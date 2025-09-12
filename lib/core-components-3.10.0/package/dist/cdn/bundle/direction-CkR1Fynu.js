"use strict";var r=require("@microsoft/fast-web-utilities");exports.getDirection=i=>{var t;return"rtl"===(null===(t=i.closest("[dir]"))||void 0===t?void 0:t.dir)?r.Direction.rtl:r.Direction.ltr};

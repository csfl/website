importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "vite.org",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/2.3a13d92aeaea166e1620.js",
    "revision": "7199d30a005a79eb3f6fd4a8dc2de2b7"
  },
  {
    "url": "/_nuxt/4.29a835006d6b42d17461.js",
    "revision": "43b5d584817cfabcdb901748767db77c"
  },
  {
    "url": "/_nuxt/5.4cb0f93d4cadd9900056.js",
    "revision": "d578210588fce3b08c75d60df8c5df47"
  },
  {
    "url": "/_nuxt/6.f031bb96c2bbec660251.js",
    "revision": "5877e1aaf306fa299d308e38e275c1a4"
  },
  {
    "url": "/_nuxt/app.7aad3ed11efcd6ca9aa3ffb62d283c1d.css",
    "revision": "7aad3ed11efcd6ca9aa3ffb62d283c1d"
  },
  {
    "url": "/_nuxt/app.9bb09544795246bc65b2.js",
    "revision": "86d868acb643478b94520099d2270749"
  },
  {
    "url": "/_nuxt/lang-en.bf9c09283a50ba5c662c.js",
    "revision": "ef8d6c2cf23534957ecac1f6de9ba0df"
  },
  {
    "url": "/_nuxt/lang-zh.2352e8cc65621cdb16b5.js",
    "revision": "fe694173e457ad313224628121858dff"
  },
  {
    "url": "/_nuxt/layouts/default.fd04c2dadcf2b1cf1d64.js",
    "revision": "ffe560606c4a85443e72ed1cf1c661ec"
  },
  {
    "url": "/_nuxt/manifest.ed313d6c73c762094335.js",
    "revision": "bfeb151cf1c716dab3f96c97c8542100"
  },
  {
    "url": "/_nuxt/pointSet.33fd0a56ef3b2de109a0.js",
    "revision": "6d65e93598e155b43465c79ffe52f6e7"
  },
  {
    "url": "/_nuxt/three.1904cec2a37cdd7783c7.js",
    "revision": "3abbe7cefe6eecfc991e8b6482827cdc"
  },
  {
    "url": "/_nuxt/vendor.e135c354f929e7337a29.js",
    "revision": "54f1bfeb53cc51732e902371f24297a8"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


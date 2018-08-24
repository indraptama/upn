/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2c899f5db06a193d1cd9362c0bb95776"
  },
  {
    "url": "assets/css/0.styles.20bf5bda.css",
    "revision": "531baf06b0718b93b22a72f1298356bc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.da53f8c2.js",
    "revision": "bbda4e98f552a23828cf32b679e34c7c"
  },
  {
    "url": "assets/js/11.09f72e10.js",
    "revision": "ebf30d8b9e32f0505fa0dfdab474bc06"
  },
  {
    "url": "assets/js/12.f388d492.js",
    "revision": "55fede91068a9a050b1a396b74319943"
  },
  {
    "url": "assets/js/13.5b406a65.js",
    "revision": "bee5b10d94c218aec715b8d36a870104"
  },
  {
    "url": "assets/js/14.f1d33146.js",
    "revision": "63586752f2a0c216e1f221b180b47872"
  },
  {
    "url": "assets/js/15.45abff46.js",
    "revision": "96dd896c92d1ffa739328e869e7943bf"
  },
  {
    "url": "assets/js/16.e00e72ce.js",
    "revision": "2d46940820648510e2046b389625b302"
  },
  {
    "url": "assets/js/17.b94d4e21.js",
    "revision": "6ba601191396e2a5fc77b958ffceba13"
  },
  {
    "url": "assets/js/18.05953a85.js",
    "revision": "fe9754c82251cd6b5491b0bed77c2f9a"
  },
  {
    "url": "assets/js/19.a1f8cf85.js",
    "revision": "b7cfa6c2742fdfa5a825f4e07bc172ee"
  },
  {
    "url": "assets/js/2.3d53c135.js",
    "revision": "2ff2705e890b878913a9dfcd10aada51"
  },
  {
    "url": "assets/js/20.a0c6c5d9.js",
    "revision": "369bc0fdf2f09a6bf196b8956b00a219"
  },
  {
    "url": "assets/js/21.0821d139.js",
    "revision": "4dc4694004ef1491225250c2bedf8ecb"
  },
  {
    "url": "assets/js/22.71369bfe.js",
    "revision": "5b5b3f40b56ceba988ba23ddf9d2e9c5"
  },
  {
    "url": "assets/js/23.7df7b00c.js",
    "revision": "e787b9bfe819ef52fd7ee6342a319f6d"
  },
  {
    "url": "assets/js/24.7fdf07fc.js",
    "revision": "77ca1a5ecb787ecb04e076097ae32a50"
  },
  {
    "url": "assets/js/25.ef741464.js",
    "revision": "50f36593395e0b112fd31e4b74d363d7"
  },
  {
    "url": "assets/js/26.9dda4d19.js",
    "revision": "8d81be72b5cafa5a63c768a0e701dd48"
  },
  {
    "url": "assets/js/27.9d814eff.js",
    "revision": "a976aa5d5209137851ebfdaf80d65cce"
  },
  {
    "url": "assets/js/28.b432fe3f.js",
    "revision": "fc32bdd751481fb33e02550adef7f60d"
  },
  {
    "url": "assets/js/29.2fc5cbae.js",
    "revision": "c22f7ddd30752034337d1da6be42df08"
  },
  {
    "url": "assets/js/3.e0e16941.js",
    "revision": "5bdf3318f0c37c6778151b05cfaf7c97"
  },
  {
    "url": "assets/js/30.464c962e.js",
    "revision": "4f4976e3ed8d5df6fb7e06ef00d15263"
  },
  {
    "url": "assets/js/31.cee58e09.js",
    "revision": "cd0edbaedf606cc987f6ab205d4cbb63"
  },
  {
    "url": "assets/js/32.9a1bab2b.js",
    "revision": "b40d282976ee3664c08b70ad0dcf88c8"
  },
  {
    "url": "assets/js/4.68bcd9df.js",
    "revision": "530772e6b27011c91307c446857131cb"
  },
  {
    "url": "assets/js/5.6feaaf52.js",
    "revision": "4fecf3de7af96ea8b641580756831b5c"
  },
  {
    "url": "assets/js/6.8967da1d.js",
    "revision": "52a2742dc3d9d69360e21b4faf36cbe7"
  },
  {
    "url": "assets/js/7.acf113ff.js",
    "revision": "d010e542de3a7dbe26197b32299a0c66"
  },
  {
    "url": "assets/js/8.70cc1012.js",
    "revision": "bfdb7ac38e7190f5599b3556296ea321"
  },
  {
    "url": "assets/js/9.8d863574.js",
    "revision": "2f4e3dbb57d6496ebeaa5d15e6126e00"
  },
  {
    "url": "assets/js/app.14655c6e.js",
    "revision": "667ce87ec5734ccb253418b023df827f"
  },
  {
    "url": "badanhukum/index.html",
    "revision": "e309f9ca945f97bc01516141c37b6f00"
  },
  {
    "url": "badanhukum/perkumpulan.html",
    "revision": "8582c2f393904e0fde9751fa6c0e7b99"
  },
  {
    "url": "badanhukum/pt.html",
    "revision": "d49fe1e476f0921c594777d856fce9f5"
  },
  {
    "url": "badanhukum/yayasan.1.html",
    "revision": "d3ba065d716c283e319bca727b7962ef"
  },
  {
    "url": "badanhukum/yayasan.html",
    "revision": "71893d806b5818762f4f17ee2b558598"
  },
  {
    "url": "badanhukum/yayasan2.html",
    "revision": "8246dd4b233445259daf7de9be0145fb"
  },
  {
    "url": "dashline-s.svg",
    "revision": "4aa700afdbf9e39d2ce92edf36dd4c50"
  },
  {
    "url": "dashline.svg",
    "revision": "0973563a8e9c40d732522c9487ebc8cb"
  },
  {
    "url": "hartabenda/index.html",
    "revision": "d40ba14ad57bf5ead91810ce7d33443c"
  },
  {
    "url": "hartabenda/kepailitan.html",
    "revision": "edce38c6b221aeb8fa45705075be6340"
  },
  {
    "url": "hartabenda/waris.html",
    "revision": "53f9c0f969f9bb38ec33557c91348d2a"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "img/icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "img/icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "img/icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "img/icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "img/icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "img/icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "img/icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "img/icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "img/icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "img/icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "img/icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "img/icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "img/icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "c447cc8994c9f48d27ba9661c7b4c43c"
  },
  {
    "url": "jaminan/fidusia.html",
    "revision": "b8077c816f2807d1236bbcb6f9fea81d"
  },
  {
    "url": "jaminan/index.html",
    "revision": "3866ce6b852dc06c057e8fe9f5347861"
  },
  {
    "url": "jaminan/perorangan.html",
    "revision": "bce11d6f251ae0b4f11cb0814e98473e"
  },
  {
    "url": "notaris/index.html",
    "revision": "d37a481f79a4bb641f1969edd4a628fc"
  },
  {
    "url": "notaris/pemberhentian.html",
    "revision": "e705891d69b2fa90f5e58e8d638947d8"
  },
  {
    "url": "notaris/pembinaan.html",
    "revision": "be0d6093062b4c04a21da2e97f5e00ef"
  },
  {
    "url": "notaris/pengangkatan.html",
    "revision": "dbada88f9c1fce31bebea23722ffcc6a"
  },
  {
    "url": "notaris/pengawasan.html",
    "revision": "c9c72d7c893f511c6e9b1caf3bf642d2"
  },
  {
    "url": "notaris/perpanjangan.html",
    "revision": "5db0798040e02e2f59952ac6f5f51493"
  },
  {
    "url": "notaris/pindah.html",
    "revision": "cd606c8369e59b849fbff214c0441e01"
  },
  {
    "url": "notaris/sikap.html",
    "revision": "2abb1c016298a9dd37e281b1b371d70e"
  },
  {
    "url": "organisasi/index.html",
    "revision": "52d6487d2e06356284de863e57eaac4a"
  },
  {
    "url": "organisasi/organisasi.html",
    "revision": "8e06d39de5aabd38d68fae620d0af355"
  },
  {
    "url": "perjanjian/bernama.html",
    "revision": "bcb2321c8251d7a7e3ec199087d24371"
  },
  {
    "url": "perjanjian/index.html",
    "revision": "e1d187fbb5664df82fc44443d861fd6b"
  },
  {
    "url": "perjanjian/legalisasi.html",
    "revision": "046799f73b8df0cdfc570c8f17b02394"
  },
  {
    "url": "perjanjian/tidakbernama.html",
    "revision": "514b93d333b409cd3e0f19ca47a3fc48"
  },
  {
    "url": "tpa/index.html",
    "revision": "47cc7fabde2cfa62c62ea39fed6b74b2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

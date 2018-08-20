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
    "revision": "75a07c0f1914ed720567052d997d3a49"
  },
  {
    "url": "assets/css/0.styles.20bf5bda.css",
    "revision": "ce7eb024bb6ceb1d9c490806025477b1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.20cab6cc.js",
    "revision": "fc77f3a5a82399cf41f8143c5af44e95"
  },
  {
    "url": "assets/js/11.899c8d94.js",
    "revision": "28067ad428b3423402d540192ba74596"
  },
  {
    "url": "assets/js/12.af691eb5.js",
    "revision": "814ac001b597c93a07001ea46794a711"
  },
  {
    "url": "assets/js/13.44ca38d7.js",
    "revision": "8277887f93123dd4722aead60e6d4725"
  },
  {
    "url": "assets/js/14.402563c7.js",
    "revision": "914fc0b67b3713088b61ebaf300c2732"
  },
  {
    "url": "assets/js/15.2f1bf796.js",
    "revision": "5d00ccf6999ab6b91d97cfe9278435ec"
  },
  {
    "url": "assets/js/16.ee5ff4b3.js",
    "revision": "641a079bbad56f44a4f4611f02821c18"
  },
  {
    "url": "assets/js/17.e380ac5c.js",
    "revision": "d2da8f8aa76efe4134f77519dcac3c3c"
  },
  {
    "url": "assets/js/18.9faeaf6c.js",
    "revision": "b0ef08b3bf3faf41f31f6518ae259f75"
  },
  {
    "url": "assets/js/19.da057b44.js",
    "revision": "f0f1b6ff3983ab5ad1eccabe0aa5836d"
  },
  {
    "url": "assets/js/2.3d53c135.js",
    "revision": "2ff2705e890b878913a9dfcd10aada51"
  },
  {
    "url": "assets/js/20.3ed7cc81.js",
    "revision": "9aad721cc4e726d8e2abb35e41a44a33"
  },
  {
    "url": "assets/js/21.36bf9438.js",
    "revision": "c2ba44de220f4aaee22f797749d86c04"
  },
  {
    "url": "assets/js/22.c1944ef1.js",
    "revision": "f8b959a9f0629e965b7c13605f0ebce1"
  },
  {
    "url": "assets/js/23.b1cee819.js",
    "revision": "e566e764b6070f4b2069d2772ed5f4f3"
  },
  {
    "url": "assets/js/24.ff459da1.js",
    "revision": "8fee333d73ce9a69c4e58944cf4ebaa3"
  },
  {
    "url": "assets/js/25.228ce19e.js",
    "revision": "0c20f2f19ad0ddc01e10426b5fe11b1c"
  },
  {
    "url": "assets/js/26.c225ad97.js",
    "revision": "43f57f589071b9df53d3f3b34c2f2da3"
  },
  {
    "url": "assets/js/27.da8b025c.js",
    "revision": "a0ae0b4f02df70fd7ad65a853ff45e1b"
  },
  {
    "url": "assets/js/28.50e74b74.js",
    "revision": "6f607bab567503d481a2e3b06d04b57d"
  },
  {
    "url": "assets/js/29.27496753.js",
    "revision": "e46739c45d1e59073eb7f9c9b47c7c11"
  },
  {
    "url": "assets/js/3.ce39ce2a.js",
    "revision": "51319e677c7d05e7be32200344452922"
  },
  {
    "url": "assets/js/30.a959853c.js",
    "revision": "14b630a44ba8679a31b0b25047920c5e"
  },
  {
    "url": "assets/js/31.4ad385ed.js",
    "revision": "a7e895303fc62693e135e2ebd5f56f35"
  },
  {
    "url": "assets/js/32.4c5446f0.js",
    "revision": "1be324cd55cbe65fab0a836a949cfeba"
  },
  {
    "url": "assets/js/4.41affb34.js",
    "revision": "62bbaebeca5f225bf82fa27503caf9d9"
  },
  {
    "url": "assets/js/5.9cde3782.js",
    "revision": "7d152369495bd193faa9aeaa54f996f6"
  },
  {
    "url": "assets/js/6.64a97bec.js",
    "revision": "4b9463bec5881d03f82fb7b884eccfee"
  },
  {
    "url": "assets/js/7.1f149fe8.js",
    "revision": "282a19c4df1e72a67493af1f408e42d4"
  },
  {
    "url": "assets/js/8.21d4c7bf.js",
    "revision": "d7cea88d45057b534635ea3a65ad3230"
  },
  {
    "url": "assets/js/9.5fc60058.js",
    "revision": "5b356f66459e85d3e3cd539ebe6d6158"
  },
  {
    "url": "assets/js/app.eca10913.js",
    "revision": "6a73d2323ce87480c568bb7709b43651"
  },
  {
    "url": "badanhukum/index.html",
    "revision": "17cca0e358f9343323a06114de845d1e"
  },
  {
    "url": "badanhukum/perkumpulan.html",
    "revision": "fac9c763bbd9f1853dd65dd23c85875e"
  },
  {
    "url": "badanhukum/pt.html",
    "revision": "9e89aab7373bcc248bee4c64894f53e0"
  },
  {
    "url": "badanhukum/yayasan.1.html",
    "revision": "1d79335233cf951f130f04c24a7c17be"
  },
  {
    "url": "badanhukum/yayasan.html",
    "revision": "60b99b83acb49c9c99e74467101b754b"
  },
  {
    "url": "badanhukum/yayasan2.html",
    "revision": "8a9abad598a32ca85decb9a618f8000c"
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
    "revision": "fc9fc71a762cbff12ce760501c4ae517"
  },
  {
    "url": "hartabenda/kepailitan.html",
    "revision": "3b901d07d004093881982390de74d428"
  },
  {
    "url": "hartabenda/waris.html",
    "revision": "562266637544bd845b1b5104144a83c6"
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
    "revision": "348f17ce424c9372af1bf031a4866dfc"
  },
  {
    "url": "jaminan/fidusia.html",
    "revision": "6d405a5c6f0a2e99510ca9156e5766d5"
  },
  {
    "url": "jaminan/index.html",
    "revision": "f5ac610529004049b2678cb975076c7e"
  },
  {
    "url": "jaminan/perorangan.html",
    "revision": "91d47416627baba3414e12a230904d42"
  },
  {
    "url": "notaris/index.html",
    "revision": "59cb344b2c6b419dffc1f265fd05469d"
  },
  {
    "url": "notaris/pemberhentian.html",
    "revision": "c2b5e7d69f38174e68d3c4eb139dfec7"
  },
  {
    "url": "notaris/pembinaan.html",
    "revision": "4c79e04936388ab53933203ac6087871"
  },
  {
    "url": "notaris/pengangkatan.html",
    "revision": "34b5daecb33954e4147df7dcb47b72ab"
  },
  {
    "url": "notaris/pengawasan.html",
    "revision": "9dc4c82411233f1148ee147fa1667fbe"
  },
  {
    "url": "notaris/perpanjangan.html",
    "revision": "95481e5e3d96fe388dd69bdad9d24a67"
  },
  {
    "url": "notaris/pindah.html",
    "revision": "ec1f938f762060c01d8c6513312cb047"
  },
  {
    "url": "notaris/sikap.html",
    "revision": "759a5610a46e7ae87c3d75fbec020734"
  },
  {
    "url": "organisasi/index.html",
    "revision": "4353324bf5b491fb3283de92d343c871"
  },
  {
    "url": "organisasi/organisasi.html",
    "revision": "4e2e989ed0b10c925c08f91ca0f2ac8b"
  },
  {
    "url": "perjanjian/bernama.html",
    "revision": "5cbd469ea2a7c269ac225e812db92605"
  },
  {
    "url": "perjanjian/index.html",
    "revision": "677e48bc1a056ddad276671f124a293c"
  },
  {
    "url": "perjanjian/legalisasi.html",
    "revision": "92c9e8bbec01155284bdf4c5c6351b63"
  },
  {
    "url": "perjanjian/tidakbernama.html",
    "revision": "780b6ba9c749015bd57896192e472901"
  },
  {
    "url": "tpa/index.html",
    "revision": "7d6faf88fad062950b9122235ad1a531"
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

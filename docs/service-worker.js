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
    "revision": "86e5c820d9e99fd0f5e08f6079fb9120"
  },
  {
    "url": "assets/css/0.styles.8b973bf0.css",
    "revision": "9717a347b13aeea9fe1f2d6f048dd3ae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8e73f33d.js",
    "revision": "ab4f235063638c1177042c4b0ed30c2f"
  },
  {
    "url": "assets/js/11.614257d9.js",
    "revision": "10d93377baad060da78e1e80df0c2427"
  },
  {
    "url": "assets/js/12.2d124127.js",
    "revision": "b9c28b20bd2fb32f07bc9773c1c112c9"
  },
  {
    "url": "assets/js/13.38e425db.js",
    "revision": "094da7a54a0e5f14f890d55ecf22c89b"
  },
  {
    "url": "assets/js/14.65004b80.js",
    "revision": "679916dc2e008e9c7a93ca366bef24bd"
  },
  {
    "url": "assets/js/15.e2f754d8.js",
    "revision": "ec528208f4d56ed7eaf0d58941d65484"
  },
  {
    "url": "assets/js/16.01a2e397.js",
    "revision": "31486aebff097baf9104d304d9f1bcff"
  },
  {
    "url": "assets/js/17.b19fcdc6.js",
    "revision": "6bbb99887b235dc6ab7ab8860b06df59"
  },
  {
    "url": "assets/js/18.d234f9aa.js",
    "revision": "3110167bd75601963f37f4d3900347e1"
  },
  {
    "url": "assets/js/19.26de1327.js",
    "revision": "d7f17d4413d1a7492216437ad005c262"
  },
  {
    "url": "assets/js/2.90a804d4.js",
    "revision": "70942fb94c5d2ac8769b826ae17f4834"
  },
  {
    "url": "assets/js/20.7f9f514c.js",
    "revision": "460b463072d789b895fe880f1576282e"
  },
  {
    "url": "assets/js/21.3b01458e.js",
    "revision": "6475dc24e55bf2bf53e1f12f6922644c"
  },
  {
    "url": "assets/js/22.950d82ba.js",
    "revision": "59c6216eccea1c45705915df66066212"
  },
  {
    "url": "assets/js/23.b3c61f0d.js",
    "revision": "f8774f2ac06a4f4bb65fd4ed6d0c5b54"
  },
  {
    "url": "assets/js/24.a19d2e56.js",
    "revision": "3f9f03f0b08d0476d0863fe312d6a8a0"
  },
  {
    "url": "assets/js/25.59a59d1b.js",
    "revision": "bcada4aff2419c74c63da649ac5f4407"
  },
  {
    "url": "assets/js/26.ea4e2143.js",
    "revision": "b3d230de011384cd20848d7f180819aa"
  },
  {
    "url": "assets/js/27.6165ebfd.js",
    "revision": "cc99534a00b0a561d9fa9d1962db2d96"
  },
  {
    "url": "assets/js/28.9b1430e1.js",
    "revision": "538582d9321214cc238aa18382b0d40d"
  },
  {
    "url": "assets/js/29.04051d6c.js",
    "revision": "bbd92a8c09d21a9e8e6132ea88ad7509"
  },
  {
    "url": "assets/js/3.17fc160f.js",
    "revision": "21da2facb60cae223f7c188285f54f0a"
  },
  {
    "url": "assets/js/30.7e8c5434.js",
    "revision": "32c6428a61715c4c200f6340ce813311"
  },
  {
    "url": "assets/js/4.cb6e19dd.js",
    "revision": "f764d2c603acffae0d04297931f85093"
  },
  {
    "url": "assets/js/5.339ba1be.js",
    "revision": "d7b12ebc574844fe54b686f797d71c4c"
  },
  {
    "url": "assets/js/6.cac9aade.js",
    "revision": "ea00c79b5bf7d5399ad051ed338fd06e"
  },
  {
    "url": "assets/js/7.8e7ae9c6.js",
    "revision": "532989d4da18b671fd09ad45d42557ba"
  },
  {
    "url": "assets/js/8.ce44eea6.js",
    "revision": "88430429704eb96c22477588434d042a"
  },
  {
    "url": "assets/js/9.fdba152b.js",
    "revision": "b6822430c7f15ee0b0155031a6440f22"
  },
  {
    "url": "assets/js/app.20d51901.js",
    "revision": "61d5e05ae43c7712dcea19796d501c88"
  },
  {
    "url": "badanhukum/index.html",
    "revision": "10e9ebb9e7c6b39190bfb1ae69c4dd88"
  },
  {
    "url": "badanhukum/perkumpulan.html",
    "revision": "f8d816dc6f2e976d76f74dccc3570728"
  },
  {
    "url": "badanhukum/pt.html",
    "revision": "218b52cc890e6ab2ed65e5a141ef875b"
  },
  {
    "url": "badanhukum/yayasan.html",
    "revision": "b6f54d09e65e5901afb018be65c21cab"
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
    "revision": "f9fb9b61295fa2686a3cabc48daa6d06"
  },
  {
    "url": "hartabenda/kepailitan.html",
    "revision": "93815033e5c74547501cc964b79f742a"
  },
  {
    "url": "hartabenda/waris.html",
    "revision": "f4106ac23cf397026638aa0ede241d50"
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
    "revision": "50aaf3d30f9e73c6f5028d9ae3d80728"
  },
  {
    "url": "jaminan/fidusia.html",
    "revision": "46b16de324506bf65a303ada7c247bbb"
  },
  {
    "url": "jaminan/index.html",
    "revision": "488408ecce345e04887f03b5dac2a3cb"
  },
  {
    "url": "jaminan/perorangan.html",
    "revision": "610ff881d2b87f36cae7496ce2f6b8ac"
  },
  {
    "url": "notaris/index.html",
    "revision": "3b4b5f65633da922f571debb3a6eecb1"
  },
  {
    "url": "notaris/pemberhentian.html",
    "revision": "a3f1fcf1beae54ab51dc30a30858eaa8"
  },
  {
    "url": "notaris/pembinaan.html",
    "revision": "28837e1653f3a6578508b47f85bc0dc9"
  },
  {
    "url": "notaris/pengangkatan.html",
    "revision": "1e16a6cf8f95b8b44c358b75b0ada0a2"
  },
  {
    "url": "notaris/pengawasan.html",
    "revision": "ca0703437a64fe822bf4241d286db52a"
  },
  {
    "url": "notaris/perpanjangan.html",
    "revision": "87ddac8c3034338c3006a7617572b404"
  },
  {
    "url": "notaris/pindah.html",
    "revision": "1e5ae70151e31880ea1e226ba522c6d7"
  },
  {
    "url": "notaris/sikap.html",
    "revision": "50b48d2bea5961437dc63ab91e923386"
  },
  {
    "url": "organisasi/index.html",
    "revision": "038be94ee6b14ec0459219d20e45a171"
  },
  {
    "url": "organisasi/organisasi.html",
    "revision": "ae75e76f7c5be21cc3ee85cb64bb7f7d"
  },
  {
    "url": "perjanjian/bernama.html",
    "revision": "d5c9abad437f4a9f1a8e42570425491f"
  },
  {
    "url": "perjanjian/index.html",
    "revision": "54f47bd7160e127b64fbb3b3c14b8c92"
  },
  {
    "url": "perjanjian/legalisasi.html",
    "revision": "3569c962dc93d5a23f65de4baba4c2c2"
  },
  {
    "url": "perjanjian/tidakbernama.html",
    "revision": "7e0f14ce444335d4c9ffc00b2a53814f"
  },
  {
    "url": "tpa/index.html",
    "revision": "b6476b070e0052ab12f1ea124262248d"
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

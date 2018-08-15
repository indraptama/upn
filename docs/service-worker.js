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
    "revision": "f73e8a3ee536c9e9295c24ebaddc9552"
  },
  {
    "url": "assets/css/0.styles.4e6da9c4.css",
    "revision": "f7c431a4c77f822a17edeaa0071a4b0f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0d9d4596.js",
    "revision": "a9128040167718080989a1fe7864d485"
  },
  {
    "url": "assets/js/11.36f01eed.js",
    "revision": "6c915e9f2f76f8173f14b15b3b0ee072"
  },
  {
    "url": "assets/js/12.407bc694.js",
    "revision": "caf66bcaa62c326d16132cfe8f36a231"
  },
  {
    "url": "assets/js/13.ba3f1fb9.js",
    "revision": "8ebdb74f26c831baf59cce5d6832c750"
  },
  {
    "url": "assets/js/14.562fc86a.js",
    "revision": "fa361fb04e824b73bcb263a58087228d"
  },
  {
    "url": "assets/js/15.165fa2ab.js",
    "revision": "51430ed52dee708ea034cbb4422bcee8"
  },
  {
    "url": "assets/js/16.57e32b6e.js",
    "revision": "23f80faddb1fc076634d0c41032fdeb3"
  },
  {
    "url": "assets/js/17.97dc8a20.js",
    "revision": "86c8b030653f8e067a3153e631acca30"
  },
  {
    "url": "assets/js/18.1768f65d.js",
    "revision": "839c4ae4a42ec765e9c101a2e6e93bef"
  },
  {
    "url": "assets/js/19.71015371.js",
    "revision": "ca1ee89b9d1622d877056d26c26556a0"
  },
  {
    "url": "assets/js/2.90a804d4.js",
    "revision": "70942fb94c5d2ac8769b826ae17f4834"
  },
  {
    "url": "assets/js/20.55bad40d.js",
    "revision": "a0f40315ed5effaf9c087a673f1d15b9"
  },
  {
    "url": "assets/js/21.267ecb88.js",
    "revision": "d2843c2bc40cfe1af7be43723f90ca31"
  },
  {
    "url": "assets/js/22.3ac39f79.js",
    "revision": "9068eb22daa616d62cfa24e911e98b2d"
  },
  {
    "url": "assets/js/23.0c7c62e3.js",
    "revision": "29b62dcf9638962def4e7a42e8207d60"
  },
  {
    "url": "assets/js/24.40df1758.js",
    "revision": "b6213553d793b3a5aab22668bc672e57"
  },
  {
    "url": "assets/js/25.60003aba.js",
    "revision": "dd56ae37aa20e86497e58966d2314dc6"
  },
  {
    "url": "assets/js/26.130738ba.js",
    "revision": "23044a922c3a12436cc2c372680ec994"
  },
  {
    "url": "assets/js/27.25352ca8.js",
    "revision": "efd25c90bb5073b5ebfb62bb98e03359"
  },
  {
    "url": "assets/js/28.22af7163.js",
    "revision": "3cf182b4f342509f89cdfec715a9e622"
  },
  {
    "url": "assets/js/29.7351f500.js",
    "revision": "d03733995927ca9485b2a424f53ccb3d"
  },
  {
    "url": "assets/js/3.9f022ef2.js",
    "revision": "964e0b4a188d59f854ff9edf975f8dad"
  },
  {
    "url": "assets/js/30.5bcb7d1f.js",
    "revision": "6db5e084d88489194b9da1adb441fa3b"
  },
  {
    "url": "assets/js/31.912a1d93.js",
    "revision": "b07a90ee32bfba3fdaf9c87cba8180d5"
  },
  {
    "url": "assets/js/32.c76b5149.js",
    "revision": "202d51578c2d422a11bb8bfe7cb7ce26"
  },
  {
    "url": "assets/js/4.4f9bd50e.js",
    "revision": "9b9e256725b58ba2572f7a1032a80246"
  },
  {
    "url": "assets/js/5.2bb1484b.js",
    "revision": "fd5fc80782a00d2e2029eea8aee315c1"
  },
  {
    "url": "assets/js/6.3c23f6da.js",
    "revision": "9f44b5e55b8c95210fdf1b3aee7fa71a"
  },
  {
    "url": "assets/js/7.edac40f0.js",
    "revision": "0bbf3cad480f66f7dbf0ec4af7307abd"
  },
  {
    "url": "assets/js/8.68f2eeab.js",
    "revision": "ff77daf634bd02661056d77283df9b95"
  },
  {
    "url": "assets/js/9.71acf592.js",
    "revision": "fc4ba57222728604347825a7b593293f"
  },
  {
    "url": "assets/js/app.297c98c2.js",
    "revision": "f6649fc043d13a8d2276119bbdd2c024"
  },
  {
    "url": "badanhukum/index.html",
    "revision": "42d33bd6c3d9bd256c76163182775c22"
  },
  {
    "url": "badanhukum/perkumpulan.html",
    "revision": "c2dc0f0ce955a6bcc592f52c1dfc6411"
  },
  {
    "url": "badanhukum/pt.html",
    "revision": "336bf13610849c72be8fc32ae2701300"
  },
  {
    "url": "badanhukum/yayasan.1.html",
    "revision": "be62fb9812f2871fa43226bb8196ffdf"
  },
  {
    "url": "badanhukum/yayasan.html",
    "revision": "7ae63dd577158ba90bf9593b3c27d270"
  },
  {
    "url": "badanhukum/yayasan2.html",
    "revision": "4ab1f762e400aea3f1b91fdd48017dde"
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
    "revision": "45d9936b18d60a4afd6b2ca188a39def"
  },
  {
    "url": "hartabenda/kepailitan.html",
    "revision": "7df7851168195614647bbf1f41191173"
  },
  {
    "url": "hartabenda/waris.html",
    "revision": "5e228c685a29b0c79602cddeb472b02e"
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
    "revision": "c431981633a6477ba1c055278ed35839"
  },
  {
    "url": "jaminan/fidusia.html",
    "revision": "f51b161f34375795f622e0c6f176c959"
  },
  {
    "url": "jaminan/index.html",
    "revision": "a8be9a1f649dcd6fe18fdeba6e04d011"
  },
  {
    "url": "jaminan/perorangan.html",
    "revision": "76f3489249898aa0d5edf03a0dbad6ba"
  },
  {
    "url": "notaris/index.html",
    "revision": "c0f873bd383189602257f9b663e958e4"
  },
  {
    "url": "notaris/pemberhentian.html",
    "revision": "c35c9e136b430f35141c126760fbf5f9"
  },
  {
    "url": "notaris/pembinaan.html",
    "revision": "d8d0ab56a4ee7636d4fabe2a960f190a"
  },
  {
    "url": "notaris/pengangkatan.html",
    "revision": "0b8929e34e5991907781448e792b5723"
  },
  {
    "url": "notaris/pengawasan.html",
    "revision": "dbb806de7e5fad3fd13307fe515e590f"
  },
  {
    "url": "notaris/perpanjangan.html",
    "revision": "119dbd3c68712d85823a29c73127fb49"
  },
  {
    "url": "notaris/pindah.html",
    "revision": "59ea8f6d9f913af385b3ef1c8e9f5400"
  },
  {
    "url": "notaris/sikap.html",
    "revision": "cba72dc653c974463bd3aabb0f378207"
  },
  {
    "url": "organisasi/index.html",
    "revision": "c6f9700b24cd280a0dbf00179b980917"
  },
  {
    "url": "organisasi/organisasi.html",
    "revision": "e9a87359ed726524a23b424c72798ab8"
  },
  {
    "url": "perjanjian/bernama.html",
    "revision": "07d64023685fbc126de406f4d450361f"
  },
  {
    "url": "perjanjian/index.html",
    "revision": "f0bf1a9cb3d15aaa568f87f040b55695"
  },
  {
    "url": "perjanjian/legalisasi.html",
    "revision": "1a7d5345a3bd9c42f5362de06db2f7ba"
  },
  {
    "url": "perjanjian/tidakbernama.html",
    "revision": "62a0b6ca231db598b403ec1ef63d17f1"
  },
  {
    "url": "tpa/index.html",
    "revision": "ed5b4aa098623d9e915908efa4c9c3da"
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

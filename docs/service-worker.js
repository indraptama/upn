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
    "revision": "2be124bb41680d617d3104fb6c081940"
  },
  {
    "url": "assets/css/0.styles.f80eaa83.css",
    "revision": "fd1e0648be5841009eacfd077b32ff35"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.db826f5f.js",
    "revision": "051b23b134a1675838e3b09f3889359a"
  },
  {
    "url": "assets/js/11.4f131836.js",
    "revision": "bff27a6bdfac8b6d0e31083000e9a185"
  },
  {
    "url": "assets/js/12.04511103.js",
    "revision": "133021c26678aa4da28283b9b451451f"
  },
  {
    "url": "assets/js/13.19232bfe.js",
    "revision": "be8d1e4fb3a2c6d485da86f9e0888ac7"
  },
  {
    "url": "assets/js/14.a7511b92.js",
    "revision": "841b04c14966af5d00b6328280a15856"
  },
  {
    "url": "assets/js/15.aed71519.js",
    "revision": "bc7597daa2b85abbabaca9cc05d1bea1"
  },
  {
    "url": "assets/js/16.4c0d40c4.js",
    "revision": "7293840302361e788d2241ca97f2af2b"
  },
  {
    "url": "assets/js/17.c4ce5be4.js",
    "revision": "d3f60fc647dd150a9f771b734aa320a1"
  },
  {
    "url": "assets/js/18.a671bc80.js",
    "revision": "859aecf219fc660a198843b9c9df1c16"
  },
  {
    "url": "assets/js/19.c6afd9de.js",
    "revision": "6693002fd25416bd4b2a888adad6752a"
  },
  {
    "url": "assets/js/2.3d53c135.js",
    "revision": "2ff2705e890b878913a9dfcd10aada51"
  },
  {
    "url": "assets/js/20.c24e6e9e.js",
    "revision": "a61b9a9f37f30aa85ff234082b9d16b2"
  },
  {
    "url": "assets/js/21.cdfec897.js",
    "revision": "afa5aedb9734d91ad3cdfd061cff9c03"
  },
  {
    "url": "assets/js/22.1b1d0e35.js",
    "revision": "840a1c2f33b5fd5361a0c8115cb26e7c"
  },
  {
    "url": "assets/js/23.b197df0a.js",
    "revision": "e2c557e3fb83b54c26646d239ef4a9ae"
  },
  {
    "url": "assets/js/24.d225c622.js",
    "revision": "f1a44febf230111e5308ab7abeebeff9"
  },
  {
    "url": "assets/js/25.8ae00989.js",
    "revision": "ea56416b42662148cf9df010516d4c1e"
  },
  {
    "url": "assets/js/26.a536d5e6.js",
    "revision": "321df6a4a045ee0f81e6f7b4bf9cb310"
  },
  {
    "url": "assets/js/27.9e17670b.js",
    "revision": "3f660be4087dc5988e6c080ad5ebaf38"
  },
  {
    "url": "assets/js/28.ee37d753.js",
    "revision": "15f656fe386dea9d084cb18637c427d2"
  },
  {
    "url": "assets/js/29.72bd6f12.js",
    "revision": "07a1683cf475492a903bf82e64f55b4f"
  },
  {
    "url": "assets/js/3.f22bbfa2.js",
    "revision": "8acabfba952e693aed76d11a20f851bd"
  },
  {
    "url": "assets/js/30.5268b419.js",
    "revision": "4f68450c1b19cd6d29c2d35397a9ac86"
  },
  {
    "url": "assets/js/4.b831e290.js",
    "revision": "d01f8c9fc7080392e7c6216d900b3d0d"
  },
  {
    "url": "assets/js/5.ab04ad40.js",
    "revision": "2c0ccd751ef893fda7256014ff899619"
  },
  {
    "url": "assets/js/6.58b6c618.js",
    "revision": "b9174e242143b98a85010871576322a8"
  },
  {
    "url": "assets/js/7.8041489d.js",
    "revision": "3e1f60c8fb21805a624d8a9ef526d73f"
  },
  {
    "url": "assets/js/8.4e45966c.js",
    "revision": "f6a8de4567c00723f9aba0e6a7bd69c7"
  },
  {
    "url": "assets/js/9.19bb726a.js",
    "revision": "086d9c960741c4b994715363295b7f76"
  },
  {
    "url": "assets/js/app.748b3e24.js",
    "revision": "8abfccde640927e602b513e8c5b5cf9b"
  },
  {
    "url": "badanhukum/index.html",
    "revision": "ffd34881ca34f5c5d9a4e55b7ed331a9"
  },
  {
    "url": "badanhukum/perkumpulan.html",
    "revision": "450480d5a949e9fa26cb5d9c3048104c"
  },
  {
    "url": "badanhukum/pt.html",
    "revision": "9ace05e4a6e9eeac9b446e54622e29f0"
  },
  {
    "url": "badanhukum/yayasan.html",
    "revision": "62b4ce9914d993cf9d17ed29265db207"
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
    "revision": "9823bf1e507d9810ec1dd6c818205903"
  },
  {
    "url": "hartabenda/kepailitan.html",
    "revision": "2cec682abc0173e4f2be9e2c613bf919"
  },
  {
    "url": "hartabenda/waris.html",
    "revision": "cb385cb8cad81eae7d080d52fa30466a"
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
    "url": "index.html",
    "revision": "79196f22d6afc8abe1876cb88a69ee7c"
  },
  {
    "url": "jaminan/fidusia.html",
    "revision": "3ae7c86554521da0167ea6fa5ef533d3"
  },
  {
    "url": "jaminan/index.html",
    "revision": "08eccc3a8da489caac1925b9db6291b9"
  },
  {
    "url": "jaminan/perorangan.html",
    "revision": "664a26c3a3f7cce714429783aea809b2"
  },
  {
    "url": "notaris/index.html",
    "revision": "891e83a70db6dfab8ca3dfaf288b2845"
  },
  {
    "url": "notaris/pemberhentian.html",
    "revision": "178eea3a454115ccaa9694f4a9d01bd5"
  },
  {
    "url": "notaris/pembinaan.html",
    "revision": "92e082eb747a76fa334b872a36ab394e"
  },
  {
    "url": "notaris/pengangkatan.html",
    "revision": "010d46dcfef67d2f92f48c936cc2e624"
  },
  {
    "url": "notaris/pengawasan.html",
    "revision": "4f99a25923c78c1694486f65a85af8fd"
  },
  {
    "url": "notaris/perpanjangan.html",
    "revision": "3e1081a67eba6def4d698862a95b62af"
  },
  {
    "url": "notaris/pindah.html",
    "revision": "7707f67df21e994ca21d93f17101902a"
  },
  {
    "url": "notaris/sikap.html",
    "revision": "bdb484c80a3f0ac3825f5e63b7cc72f6"
  },
  {
    "url": "organisasi/index.html",
    "revision": "05a12319b34d3ef3a4671e8c1ea76cfe"
  },
  {
    "url": "organisasi/organisasi.html",
    "revision": "fa8ebfdf21d89b48e36d15d6e4cac6cc"
  },
  {
    "url": "perjanjian/bernama.html",
    "revision": "789d91bcdea86663a0479ea20b7f9493"
  },
  {
    "url": "perjanjian/index.html",
    "revision": "bb6ee3da2a08e37c3fc6ce6275203189"
  },
  {
    "url": "perjanjian/legalisasi.html",
    "revision": "8a3e2e5b81b4d8ce7b5d07c56ef78bf6"
  },
  {
    "url": "perjanjian/tidakbernama.html",
    "revision": "fa88355666f9243dd366a694cccb234e"
  },
  {
    "url": "tpa/index.html",
    "revision": "cb7b58acf3d4cf665858348798d0140c"
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

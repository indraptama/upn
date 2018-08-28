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
    "revision": "3c2c8ecee1640489f48d34a02709168c"
  },
  {
    "url": "assets/css/0.styles.41acedc7.css",
    "revision": "1e887b856d311707ddde1540f95e4500"
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
    "url": "assets/js/11.caea2d02.js",
    "revision": "ebbc6eb1638c9b7016a37abc0e46d8a2"
  },
  {
    "url": "assets/js/12.89432c63.js",
    "revision": "a98b8a275277d9a4c2018a5323bc810d"
  },
  {
    "url": "assets/js/13.c51b3258.js",
    "revision": "5642409f6d8fe23aeb8fb0ad63a98bd1"
  },
  {
    "url": "assets/js/14.ec8fcfa0.js",
    "revision": "efb7ac7c6ecaf8148597415ad2c548cd"
  },
  {
    "url": "assets/js/15.fa69b666.js",
    "revision": "12d47bc329b87a23bae6f23d0deb74d0"
  },
  {
    "url": "assets/js/16.6acf8417.js",
    "revision": "6369a4477ace93f931a8851201332ec2"
  },
  {
    "url": "assets/js/17.1f271647.js",
    "revision": "5164c0d773151398b721bd49a4b8637e"
  },
  {
    "url": "assets/js/18.998634f8.js",
    "revision": "ba125432c58576fa6647ee9d6acc4652"
  },
  {
    "url": "assets/js/19.7f6d1c1f.js",
    "revision": "58d4c94fb4e4557b056433c1bec28a0b"
  },
  {
    "url": "assets/js/2.3d53c135.js",
    "revision": "2ff2705e890b878913a9dfcd10aada51"
  },
  {
    "url": "assets/js/20.46a165bc.js",
    "revision": "b96c7d54ef24d4453462628b29ea68f4"
  },
  {
    "url": "assets/js/21.e52ef11b.js",
    "revision": "40e20b37c6a796d87f9d062165ae6921"
  },
  {
    "url": "assets/js/22.2227297d.js",
    "revision": "598808cafadcef26c861da8c9df885da"
  },
  {
    "url": "assets/js/23.7272d5c6.js",
    "revision": "8f9c5fb3807e36f8b0d03eace5770614"
  },
  {
    "url": "assets/js/24.81b2f62a.js",
    "revision": "faf6ed7886c180ac581ea1d9e193ad67"
  },
  {
    "url": "assets/js/25.8558cd40.js",
    "revision": "0c67a9f1d7e15c169cb796f9d22467a3"
  },
  {
    "url": "assets/js/26.cd3b9d9d.js",
    "revision": "63348643a4a4aea29856b643e3fe7a03"
  },
  {
    "url": "assets/js/27.2840cc84.js",
    "revision": "ebb431adf0c8cdaa1b5e56f113abf754"
  },
  {
    "url": "assets/js/28.019bca0d.js",
    "revision": "b46a2a9aea0b3d0347fbb1f125e22999"
  },
  {
    "url": "assets/js/29.6b437c21.js",
    "revision": "1fb65f0ac67978cbae1835e01ed2f6c7"
  },
  {
    "url": "assets/js/3.68f15e2f.js",
    "revision": "ab56d64a2e97d1b96f46790d179fe433"
  },
  {
    "url": "assets/js/30.f2832b0b.js",
    "revision": "65c4a7c5088ebc76ad6aba2851b4bbb4"
  },
  {
    "url": "assets/js/31.3c79be90.js",
    "revision": "08250e5302955872a315a26709fcad78"
  },
  {
    "url": "assets/js/32.449836d5.js",
    "revision": "8a320f5be078fc7ece399fc35a682dbb"
  },
  {
    "url": "assets/js/33.7da62ab4.js",
    "revision": "8e46c76c526090a13ff55a40fae5765a"
  },
  {
    "url": "assets/js/4.08c78c28.js",
    "revision": "15f25b19228868df0a480b9bb49e5183"
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
    "url": "assets/js/app.62d63435.js",
    "revision": "a580bcf3624c485a6dd84571b436fafa"
  },
  {
    "url": "badanhukum/index.html",
    "revision": "a0e08186ecaa72a10bc5f40a3e94ec28"
  },
  {
    "url": "badanhukum/perkumpulan.html",
    "revision": "b73f82f6d297f82d2c7a4ee4399c7ae0"
  },
  {
    "url": "badanhukum/pt.html",
    "revision": "122f1f2b38f639c231e735c9e41dfdf0"
  },
  {
    "url": "badanhukum/yayasan.1.html",
    "revision": "99efd2fe9d0bd071d7bad0c89e5a0f57"
  },
  {
    "url": "badanhukum/yayasan.html",
    "revision": "673badad57ef0d370f7436fd99192827"
  },
  {
    "url": "badanhukum/yayasan2.html",
    "revision": "ab253e8261c822786fa4e4c92c3c9298"
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
    "revision": "0dcd1740b56ce273f40ce7b65210cf2a"
  },
  {
    "url": "hartabenda/kepailitan.html",
    "revision": "edcf9ebea2a6e423517a8daf9d925a12"
  },
  {
    "url": "hartabenda/waris.html",
    "revision": "e03d923908e5ff66248b110d5bb6fd14"
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
    "revision": "156c21e3eb1441077d248fc16c9bd16c"
  },
  {
    "url": "jaminan/fidusia.html",
    "revision": "3448e0c8daa087a3f69d87892b9540f6"
  },
  {
    "url": "jaminan/index.html",
    "revision": "fd0dab4efd699d0f5616d559aa9b57ad"
  },
  {
    "url": "jaminan/perorangan.html",
    "revision": "850bafbd845848c068fd26fee458752d"
  },
  {
    "url": "notaris/index.html",
    "revision": "c6f7c8d1e020c5a40284bc350cd5d059"
  },
  {
    "url": "notaris/pemberhentian.html",
    "revision": "1a9cbe03db8e333c6e97fe705a4976b6"
  },
  {
    "url": "notaris/pembinaan.html",
    "revision": "493ebfe3847137f87e3e41b4de0f94bd"
  },
  {
    "url": "notaris/pengangkatan.html",
    "revision": "279c20fb428f37a8713fb58b62db58ef"
  },
  {
    "url": "notaris/pengawasan.html",
    "revision": "dc07475ea2361f982093b0b9749ae602"
  },
  {
    "url": "notaris/perpanjangan.html",
    "revision": "8f6f3fab57fb96a7460af8ce0c869647"
  },
  {
    "url": "notaris/pindah.html",
    "revision": "b263ca583c8a9b60e141dde4be9f1832"
  },
  {
    "url": "notaris/sikap.html",
    "revision": "62371088e1de65a32ce7e2e7d707a0c7"
  },
  {
    "url": "organisasi/index.html",
    "revision": "7f3c6102b8e37f5d5904a73290dcc06c"
  },
  {
    "url": "organisasi/organisasi.html",
    "revision": "6d7f08c262f0a24ff38a668d792ad44b"
  },
  {
    "url": "perjanjian/bernama.html",
    "revision": "e17107deeb8c59aa06ec3466a008d1b4"
  },
  {
    "url": "perjanjian/index.html",
    "revision": "bfc4cdb412df5e5a4c5295f8562a9799"
  },
  {
    "url": "perjanjian/legalisasi.html",
    "revision": "98812f6dfb9fea45267052ec65faaf48"
  },
  {
    "url": "perjanjian/tidakbernama.html",
    "revision": "d1e2b27173b366b1d760fe1799342825"
  },
  {
    "url": "tpa/index.html",
    "revision": "277a95cfd3760c7d81822b0650272850"
  },
  {
    "url": "tpa/pribadi.html",
    "revision": "3905c2c750ab514cc815a149872a2c6f"
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

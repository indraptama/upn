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
    "revision": "31f3c2054418b12d878f6b290cb593a2"
  },
  {
    "url": "assets/css/0.styles.dc1b091e.css",
    "revision": "f9f4632db26cc5dedf422880dbd7cea8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dce8d67e.js",
    "revision": "8b178248f4c7963b95c36e84ea224354"
  },
  {
    "url": "assets/js/11.66ef8f18.js",
    "revision": "0413746e1e675d438af64f6fb006a5a2"
  },
  {
    "url": "assets/js/12.28d33fa4.js",
    "revision": "5068af002eb5da38097111f6a9be14f0"
  },
  {
    "url": "assets/js/13.d4ab35dd.js",
    "revision": "f8620ed406100a5ef3f726b93f7d8874"
  },
  {
    "url": "assets/js/14.41ac56f6.js",
    "revision": "63f140c4f7f9acec93b7eb5bb4c707e0"
  },
  {
    "url": "assets/js/15.0d9a1b5d.js",
    "revision": "801242f46b9dab0f6c8711aef4345a87"
  },
  {
    "url": "assets/js/16.01f9907a.js",
    "revision": "69bfd80a488be5e24efc0d86b9534467"
  },
  {
    "url": "assets/js/17.f96fa440.js",
    "revision": "b0e733b839c5572f406eacfb74438a96"
  },
  {
    "url": "assets/js/18.478ab123.js",
    "revision": "c44bebdb89149bc6734654e55e248e46"
  },
  {
    "url": "assets/js/19.a44e2ecd.js",
    "revision": "14187b5e4272d4ae83590b1ea4ebe849"
  },
  {
    "url": "assets/js/2.0a7487a4.js",
    "revision": "6853b105a973c9ab9d43289041231e67"
  },
  {
    "url": "assets/js/20.11f2c44e.js",
    "revision": "f70f3cb10428cb8785784a9dea8e5ecf"
  },
  {
    "url": "assets/js/21.4bfebe67.js",
    "revision": "b91a1148b6a462b5a6324e2d31d94258"
  },
  {
    "url": "assets/js/22.6a2680f6.js",
    "revision": "7b1eee7f205a9f07fadd4db25b52187e"
  },
  {
    "url": "assets/js/23.e4ac87bc.js",
    "revision": "0f8e3c5c066dcf9ccb0db9e78d0abc4b"
  },
  {
    "url": "assets/js/24.32734d92.js",
    "revision": "af60611a9d81fa8f5a29fa0619920e4c"
  },
  {
    "url": "assets/js/25.4b43806f.js",
    "revision": "a3c92b5d73176fc3f0e56a24bc331c04"
  },
  {
    "url": "assets/js/26.e9c259c1.js",
    "revision": "fd0c191376475d8b521683bb20517be0"
  },
  {
    "url": "assets/js/27.c8e44765.js",
    "revision": "9d8aee32bea19d52b71effb1e9943e09"
  },
  {
    "url": "assets/js/28.99665e28.js",
    "revision": "07ea7d158a4226b3e03554d118bbf018"
  },
  {
    "url": "assets/js/29.a2cf9b16.js",
    "revision": "3dd6f2d7c58d4f4334c6f847b7fbf0ee"
  },
  {
    "url": "assets/js/3.71b72357.js",
    "revision": "9083885da3592e7e5eba457255288628"
  },
  {
    "url": "assets/js/30.718047ce.js",
    "revision": "dbe71ea463d0705f8aa6d510ddd6aaa2"
  },
  {
    "url": "assets/js/31.f0f4795a.js",
    "revision": "278c4701ac29627dccb4c68ff84fbe7f"
  },
  {
    "url": "assets/js/32.adbfbb3a.js",
    "revision": "dcc970e3df1cf92fd4aa71e9cda8cd36"
  },
  {
    "url": "assets/js/33.4e06d3f6.js",
    "revision": "58f92eaa811f48b9fb0ec7908f5fe934"
  },
  {
    "url": "assets/js/34.6ee45667.js",
    "revision": "4b6f3124c6e1cb496b4d5a92de9ea81c"
  },
  {
    "url": "assets/js/4.30bc9a27.js",
    "revision": "240cc7a810136d0775017f5be002033d"
  },
  {
    "url": "assets/js/5.0068f0b4.js",
    "revision": "dbad0152fdba950bbc5d62550faaf820"
  },
  {
    "url": "assets/js/6.2ae83a2b.js",
    "revision": "b8f48100a647c2d03638be0edca87279"
  },
  {
    "url": "assets/js/7.d5d65495.js",
    "revision": "3512a46bea7e35adcc2f183f3ab90856"
  },
  {
    "url": "assets/js/8.8bd2713f.js",
    "revision": "957e53b8bf014b1cb4c8f1888c0c653c"
  },
  {
    "url": "assets/js/9.2eb63695.js",
    "revision": "7a99b5767af6e0328e013047c326c34b"
  },
  {
    "url": "assets/js/app.7c936b6e.js",
    "revision": "633af6b031a58e206cd30e6938a6443a"
  },
  {
    "url": "badanhukum/index.html",
    "revision": "be92ebe1e3d692c7456ce0c6ebf89eb6"
  },
  {
    "url": "badanhukum/perkumpulan.html",
    "revision": "47dc4141035ce969ce91395dd06335da"
  },
  {
    "url": "badanhukum/pt.html",
    "revision": "7b06dd5d662d5f38fecef183ada961af"
  },
  {
    "url": "badanhukum/yayasan.1.html",
    "revision": "0cec7bca581bade6d95c38706017b83e"
  },
  {
    "url": "badanhukum/yayasan.html",
    "revision": "b95c7813fb33be65bd346b1bd96ab624"
  },
  {
    "url": "badanhukum/yayasan2.html",
    "revision": "741ae1a29490bde6c9f9b7a95ed01a67"
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
    "revision": "daec596370ac7bf634a7d23d6caf6f6c"
  },
  {
    "url": "hartabenda/kepailitan.html",
    "revision": "15b66db52031c8adc1ac13d838979c6a"
  },
  {
    "url": "hartabenda/waris.html",
    "revision": "be11e1bd00a9483ec742bb1e12a86c2c"
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
    "revision": "a1c5c30595e221a3afacb6fe0b1554af"
  },
  {
    "url": "jaminan/fidusia.html",
    "revision": "aca560d77706b9995293395ecbb136e4"
  },
  {
    "url": "jaminan/index.html",
    "revision": "d4c212804d84adf6448a9f5efdd3a4d8"
  },
  {
    "url": "jaminan/perorangan.html",
    "revision": "85408ddeab2df124620e2a69dd7f1012"
  },
  {
    "url": "notaris/index.html",
    "revision": "b5568857be4bf60495f8ecdc2e901233"
  },
  {
    "url": "notaris/pemberhentian.html",
    "revision": "4f94f630f0e9950ad35f7d83b826069e"
  },
  {
    "url": "notaris/pembinaan.html",
    "revision": "be7e7326429e7422ac4d216631e2aec1"
  },
  {
    "url": "notaris/pengangkatan.html",
    "revision": "448ab12c40e27398c2cb9597e8df13ff"
  },
  {
    "url": "notaris/pengawasan.html",
    "revision": "84d26611bc8fb616aef192464255c156"
  },
  {
    "url": "notaris/perpanjangan.html",
    "revision": "2b48dab53a5a1a01d7811ff520bb749b"
  },
  {
    "url": "notaris/pindah.html",
    "revision": "80fef29edd8e35f670852527535e87c9"
  },
  {
    "url": "notaris/sikap.html",
    "revision": "8ad76f3abbe15349fd0c14b20e1cb22d"
  },
  {
    "url": "organisasi/index.html",
    "revision": "9df190241f412ba82126534d9ca0d179"
  },
  {
    "url": "organisasi/organisasi.html",
    "revision": "4881518018b176a8e7bc8b9d138968c6"
  },
  {
    "url": "perjanjian/bernama.html",
    "revision": "2b7230c1116d57e489037bd29da9ee78"
  },
  {
    "url": "perjanjian/index.html",
    "revision": "31141022b00292d90b4413f32a140565"
  },
  {
    "url": "perjanjian/legalisasi.html",
    "revision": "eb76fbd484238499da90249a552b7c7c"
  },
  {
    "url": "perjanjian/tidakbernama.html",
    "revision": "99530ebf75fa569dfac87af5b7e2d61f"
  },
  {
    "url": "tpa/awalakta.html",
    "revision": "f10a20e4994c5a2275f259709aee462e"
  },
  {
    "url": "tpa/index.html",
    "revision": "ed978606c548904cea5dc50567db8410"
  },
  {
    "url": "tpa/pribadi.html",
    "revision": "e0a57a7433bf86a14d1fd79bf1595d17"
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

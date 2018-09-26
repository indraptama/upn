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
    "revision": "9c86aa9bd9ea9f83daaa583b4fc01799"
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
    "url": "assets/js/10.3d432a59.js",
    "revision": "a92815c2530e0c56025bb21339e589df"
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
    "url": "assets/js/app.a04079e7.js",
    "revision": "29e29648ac0483a10be33fcd1a587e0d"
  },
  {
    "url": "badanhukum/index.html",
    "revision": "4c8a43c74540a9f8d706ab841d8c31dc"
  },
  {
    "url": "badanhukum/perkumpulan.html",
    "revision": "9c7e033bfe21024987b999cad1e0716a"
  },
  {
    "url": "badanhukum/pt.html",
    "revision": "0e4c0a9101309643909e22ffe4e282f5"
  },
  {
    "url": "badanhukum/yayasan.1.html",
    "revision": "7f105b00681576a25afa1ec116fa72c8"
  },
  {
    "url": "badanhukum/yayasan.html",
    "revision": "2eb97e78c61560deca0d4f445435cfd6"
  },
  {
    "url": "badanhukum/yayasan2.html",
    "revision": "471ba4857744d9db2a30fa78aeb96465"
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
    "revision": "510d9d78aee34108e9a25fe2caf154b2"
  },
  {
    "url": "hartabenda/kepailitan.html",
    "revision": "208c1626e32205530076be7659ebe602"
  },
  {
    "url": "hartabenda/waris.html",
    "revision": "2386cc5727af5684849130af8657e95a"
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
    "revision": "318ffbca0cff3959d6a091e07de4ab92"
  },
  {
    "url": "jaminan/fidusia.html",
    "revision": "5fb2678c2d98d1e91eccf8f8f981ef4d"
  },
  {
    "url": "jaminan/index.html",
    "revision": "acae3b392f14cdfbb7a4931d1b1a38c9"
  },
  {
    "url": "jaminan/perorangan.html",
    "revision": "10962c16e9712e323f0e12e5be48a892"
  },
  {
    "url": "notaris/index.html",
    "revision": "8e3f6372dd2e9f91cc7b513ff688d5f7"
  },
  {
    "url": "notaris/pemberhentian.html",
    "revision": "a243c808c46391ea643c044218b8b39a"
  },
  {
    "url": "notaris/pembinaan.html",
    "revision": "bbc43b94c37f0eb64e5825e58be57093"
  },
  {
    "url": "notaris/pengangkatan.html",
    "revision": "b2a0c80ff4e6e0a5db3f9921f5406b2a"
  },
  {
    "url": "notaris/pengawasan.html",
    "revision": "e450e909135ad90ec9d9058ff13edcbc"
  },
  {
    "url": "notaris/perpanjangan.html",
    "revision": "68d551797daa012d72ca80b6f39bcee8"
  },
  {
    "url": "notaris/pindah.html",
    "revision": "f3f366bc84d9ab9d49ad310ed0b7020d"
  },
  {
    "url": "notaris/sikap.html",
    "revision": "4e5f24a0fc0054de5754928c7ce733e9"
  },
  {
    "url": "organisasi/index.html",
    "revision": "52e945978b78b4c0ddf26bcea4b4e557"
  },
  {
    "url": "organisasi/organisasi.html",
    "revision": "8092329e8dbc194a189f5247c66c3e47"
  },
  {
    "url": "perjanjian/bernama.html",
    "revision": "f3991410400d3ab1171dad9b4b35d965"
  },
  {
    "url": "perjanjian/index.html",
    "revision": "40d7b5a87435a710a61afa87d2199591"
  },
  {
    "url": "perjanjian/legalisasi.html",
    "revision": "259b795d6370d5751c88ab34a1b7825a"
  },
  {
    "url": "perjanjian/tidakbernama.html",
    "revision": "5fcccd5d181f1867fa08532ff7e71ec7"
  },
  {
    "url": "tpa/awalakta.html",
    "revision": "f59ec393e15629ffed4c8f9445992c82"
  },
  {
    "url": "tpa/index.html",
    "revision": "de20cab4cbb5e888a96b636eb872d5c0"
  },
  {
    "url": "tpa/pribadi.html",
    "revision": "d8057c2fd3a4830d583614f48cc4fb93"
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

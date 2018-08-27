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
    "revision": "769a546a817c21fab72aa42a87d35e35"
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
    "url": "assets/js/12.ac5e1deb.js",
    "revision": "cd11b64e6acf52dab1975589d6fe0287"
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
    "url": "assets/js/15.fa69b666.js",
    "revision": "12d47bc329b87a23bae6f23d0deb74d0"
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
    "url": "assets/js/4.34146f13.js",
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
    "url": "assets/js/app.d26f67a6.js",
    "revision": "009382d27a8eaa2d63360b30052df662"
  },
  {
    "url": "badanhukum/index.html",
    "revision": "093ee544f0390f61b49f1e3d0f8372ab"
  },
  {
    "url": "badanhukum/perkumpulan.html",
    "revision": "800599af77bfea4144b38532c5b4f1d1"
  },
  {
    "url": "badanhukum/pt.html",
    "revision": "79a7f17d5c625988b90e92aa59e4ff1a"
  },
  {
    "url": "badanhukum/yayasan.1.html",
    "revision": "2b6735c37fad1818ce1f17b3454633d7"
  },
  {
    "url": "badanhukum/yayasan.html",
    "revision": "936f70b3130aa3e457010967b0fe60e7"
  },
  {
    "url": "badanhukum/yayasan2.html",
    "revision": "a7c719bc4f0314ffa92265a4dd6c8c8e"
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
    "revision": "f3b5e7f375c153fb444d6b41421802fe"
  },
  {
    "url": "hartabenda/kepailitan.html",
    "revision": "5801e172af7ae4b43a31bd4ec2da7112"
  },
  {
    "url": "hartabenda/waris.html",
    "revision": "bb192fb81f5d49214cb55e4d16b1cfb9"
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
    "revision": "732d9a5c0872ab2cd2b61725fd0a276e"
  },
  {
    "url": "jaminan/fidusia.html",
    "revision": "a4e56eac214bad1cd4069c09cada7a85"
  },
  {
    "url": "jaminan/index.html",
    "revision": "406cd9955f8519c95539d8af73e436aa"
  },
  {
    "url": "jaminan/perorangan.html",
    "revision": "4505cae52a5d3f00c0a6e81ec2710957"
  },
  {
    "url": "notaris/index.html",
    "revision": "21e56eb831b42c1fe899c3dd50e77472"
  },
  {
    "url": "notaris/pemberhentian.html",
    "revision": "382fc820154e79f7a48f2a0725b47d74"
  },
  {
    "url": "notaris/pembinaan.html",
    "revision": "9df4b37dde5b50ad99fdbd2f1f139a08"
  },
  {
    "url": "notaris/pengangkatan.html",
    "revision": "dce03c68d28519a4a1d52ec39d9672c4"
  },
  {
    "url": "notaris/pengawasan.html",
    "revision": "5abd32490f8b63400859fda1af73ab2d"
  },
  {
    "url": "notaris/perpanjangan.html",
    "revision": "5f96bbf1e44b08735b5f4938e0665ce4"
  },
  {
    "url": "notaris/pindah.html",
    "revision": "f218cd8e57623f05d0b1d3bbeb0826b8"
  },
  {
    "url": "notaris/sikap.html",
    "revision": "53f8a9d175f43ff79e251aa6890b5bf8"
  },
  {
    "url": "organisasi/index.html",
    "revision": "8b4c844c69b195af5372f69ea08e5052"
  },
  {
    "url": "organisasi/organisasi.html",
    "revision": "1a863e875a8ae0f613eeb410de98c0b0"
  },
  {
    "url": "perjanjian/bernama.html",
    "revision": "789601a9831a64eeb5ccd3fef84bbef6"
  },
  {
    "url": "perjanjian/index.html",
    "revision": "510acbae14361a37dd3fc8117268eb00"
  },
  {
    "url": "perjanjian/legalisasi.html",
    "revision": "ba0adb12a15dff65440e6be1f8a70d46"
  },
  {
    "url": "perjanjian/tidakbernama.html",
    "revision": "93fa884db62213dd83786acba92457f9"
  },
  {
    "url": "tpa/index.html",
    "revision": "23464d741f62525261065518cb62f9db"
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

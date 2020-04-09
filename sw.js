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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "42d8a3261f624be5800cca60d38b74a5"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "01bed86d02c190e2453fb1f7b166077f"
  },
  {
    "url": "page-data/math/page-data.json",
    "revision": "0fffbae2ae996827402ed4121acea7aa"
  },
  {
    "url": "page-data/math/poly/div-mod/page-data.json",
    "revision": "78911e0f0ca48d0cb07b5625a2721c2b"
  },
  {
    "url": "page-data/math/poly/fft/page-data.json",
    "revision": "eb235bc8d65b634656412d1b082fc53f"
  },
  {
    "url": "page-data/math/poly/fwt/page-data.json",
    "revision": "e24870becd9bc1dca2a9d52bc8383561"
  },
  {
    "url": "page-data/math/poly/intro/page-data.json",
    "revision": "046ba393afbaab5c9e6e5ecc5acc7074"
  },
  {
    "url": "page-data/math/poly/inv-tri-func/page-data.json",
    "revision": "d7ca9fc276758b7e75dd57011a89a550"
  },
  {
    "url": "page-data/math/poly/inv/page-data.json",
    "revision": "80ef444f9211175a16c2a8beaf636c35"
  },
  {
    "url": "page-data/math/poly/lagrange/page-data.json",
    "revision": "68563b7744656ac45456016f06050ef8"
  },
  {
    "url": "page-data/math/poly/ln-exp/page-data.json",
    "revision": "a7f7c2190737dc2c02558a9525415898"
  },
  {
    "url": "page-data/math/poly/multipoint-eval-interpolation/page-data.json",
    "revision": "6e590df2ae3705c8a4d04985be4a5f5e"
  },
  {
    "url": "page-data/math/poly/newton/page-data.json",
    "revision": "db01b973e730fcce754e06fea785e35a"
  },
  {
    "url": "page-data/math/poly/ntt/page-data.json",
    "revision": "daf254842efad9a4be9dca2232ce15ad"
  },
  {
    "url": "page-data/math/poly/sqrt/page-data.json",
    "revision": "a2aaf32c36689a89ee74079738e7e362"
  },
  {
    "url": "page-data/math/poly/tri-func/page-data.json",
    "revision": "78038a04f9b98fd1518df162988f54da"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/pages/page-data.json",
    "revision": "409185b4b48ba133266454fe3e277a4a"
  },
  {
    "url": "page-data/tags/animals/page-data.json",
    "revision": "c5174fae8be6c6231409c4c7bfdc03fa"
  },
  {
    "url": "page-data/tags/chicago/page-data.json",
    "revision": "3d0c07ac2a40f7e34efb2b262c411b6a"
  },
  {
    "url": "page-data/tags/math/page-data.json",
    "revision": "be3a4764af2feec3ac03588908c0dcf3"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "becd73fa324bfa3709f421c539fc4679"
  },
  {
    "url": "page-data/tags/polynomial/page-data.json",
    "revision": "2c560cc9f86a1d37be80bb3225cccc1b"
  },
  {
    "url": "page-data/tags/zoos/page-data.json",
    "revision": "fd3b2b8fc9c78c0f712f2b88a0acd67e"
  },
  {
    "url": "page-data/tags/中文/page-data.json",
    "revision": "0cdc4458160bc5f8cd9c7fe47d975ef3"
  },
  {
    "url": "page-data/test/page-data.json",
    "revision": "3936493c87af181fefd44cdd7f6b6300"
  },
  {
    "url": "page-data/theme-guide/customization/page-data.json",
    "revision": "ca76022197cf861f77a02a541832cac7"
  },
  {
    "url": "page-data/theme-guide/mdx-components/page-data.json",
    "revision": "dbccc3f7d833e35cfe41f89eeca8431b"
  },
  {
    "url": "page-data/theme-guide/navigation/page-data.json",
    "revision": "4a01eb9759b717e6e31a58ede5e6bdbc"
  },
  {
    "url": "page-data/theme-guide/page-data.json",
    "revision": "5927dffad4fedd0dfcb33fbdec06c213"
  },
  {
    "url": "14-d31d14b82914b8276769.js"
  },
  {
    "url": "1bfc9850-75e079c821c7889f68e1.js"
  },
  {
    "url": "252f366e-16cab1da165e5bcd7ac8.js"
  },
  {
    "url": "5db4768070ad89555ab684338e9a5a771fd6772a-bbb8a48ff11718e5cfad.js"
  },
  {
    "url": "app-4d8075f8559eb398c552.js"
  },
  {
    "url": "bab4896a-a4e1ec2fe2d3f186d923.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-33096b8b764031bf7ca4.js"
  },
  {
    "url": "component---src-pages-404-js-6c53fe4a7e38f8a1e791.js"
  },
  {
    "url": "component---src-pages-pages-js-5f4291a98f04aad90bde.js"
  },
  {
    "url": "component---src-pages-tags-js-5ec682421732e2d24964.js"
  },
  {
    "url": "component---src-templates-doc-js-7c8c9f7f4759fa72a5fc.js"
  },
  {
    "url": "component---src-templates-tags-js-d4e90ec6b5771acda74d.js"
  },
  {
    "url": "extra.js"
  },
  {
    "url": "framework-3321703c33570853116c.js"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "styles-c076416a2b080c6c3803.js"
  },
  {
    "url": "webpack-runtime-d8d8a0eaa6fb986adb16.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "409eb0e7e92ccae2d310ff5383036842"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a64367b2f20302a9d6f214569017f012"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(json)$/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(woff|woff2)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff)$/, new workbox.strategies.NetworkOnly(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-4d8075f8559eb398c552.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)

import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  sw: "/static/sw.js",
  buildExcludes: [/middleware-manifest.json$/],
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  fallbacks: {
    //image: "/static/images/fallback.png",
    document: "/offline", // if you want to fallback to a custom page rather than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  },
});

export default withPWA({
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "*.itexpertnow.com" },
      { protocol: "https", hostname: "itexpertnow.com" },
    ],
  },
});

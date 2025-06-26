const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              "img-src * data:;",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net;",
              "style-src 'self' 'unsafe-inline' data:;",
              "font-src 'self' data:;",
              "connect-src 'self' https://strapi.qiuadminplatform.space/api/properties https://www.google.com https://www.google-analytics.com https://stats.g.doubleclick.net;",
              "frame-src https://www.google.com https://www.youtube.com https://googleads.g.doubleclick.net https://td.doubleclick.net https://www.googletagmanager.com;",
            ].join(" "),
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
    transformer,
  } = await getDefaultConfig();

  return {
    transformer: {
      ...transformer,
      minifierConfig: {
        keep_classnames: false,
        keep_fnames: false,
        mangle: {
          toplevel: process.env.NODE_ENV === "production",
        },
        output: {
          comments: false,
        },
        compress: {
          drop_console: true,
          passes: 2,
          toplevel: true,
        },
      },
    },
    resolver: {
      assetExts,
      sourceExts,
    },
  };
})();

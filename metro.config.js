const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const defaultConfig = getDefaultConfig(__dirname);

  return {
    ...defaultConfig,
    transformer: {
      ...defaultConfig.transformer,
      minifierConfig: {
        keep_classnames: false,
        keep_fnames: false,
        mangle: {
          toplevel: process.env.NODE_ENV === "production", // Avoid mangling in development
        },
        output: {
          comments: false,
        },
        compress: {
          drop_console: true, // Remove console.logs in production
          passes: 2,
          toplevel: true,
        },
      },
    },
    resolver: {
      assetExts: defaultConfig.resolver.assetExts,
      sourceExts: defaultConfig.resolver.sourceExts, // Ensure source extensions are correct
    },
  };
})();

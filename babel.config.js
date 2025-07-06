module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        "babel-preset-expo",
        {
          runtime: "automatic", // Enable automatic JSX runtime
        },
      ],
    ],
    env: {
      production: {
        plugins: ["transform-remove-console"], // ✅ Strips console.log, warn, etc. in release
      },
    },
    plugins: [
      "react-native-reanimated/plugin", // Required for react-native-reanimated
    ],
  };
};

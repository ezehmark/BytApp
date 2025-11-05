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
        plugins: ["transform-remove-console"], // ✅ Removes console logs in production
      },
    },
    plugins: [
      "nativewind/babel",            // ✅ For Tailwind (NativeWind)
      "react-native-reanimated/plugin", // ✅ For Reanimated (must come last)
    ],
  };
};

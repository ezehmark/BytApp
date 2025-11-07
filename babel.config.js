module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "transform-remove-console",
        { exclude: ["error", "warn"] } // optional fine-tuning
      ],
      "react-native-reanimated/plugin", // must be last
    ],
  };
};

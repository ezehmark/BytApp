module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        'babel-preset-expo',
        {
          runtime: 'automatic', // Enable automatic JSX runtime
        },
      ],
    ],
    plugins: [
      'react-native-reanimated/plugin', // Required for react-native-reanimated
    ],
  };
};

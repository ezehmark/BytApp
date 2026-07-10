module.exports = function (api) {
  api.cache(true);

  const plugins = ['react-native-worklets/plugin', 'react-native-reanimated/plugin'];

  if (process.env.NODE_ENV === 'production') {
    plugins.splice(2, 0, [
      'transform-remove-console',
      { exclude: ['error', 'warn'] },
    ]);
  }

  return {
    presets: ['babel-preset-expo', 'nativewind/babel'],
    plugins,
  };
};

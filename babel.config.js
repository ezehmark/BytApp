module.exports = function (api) {
  api.cache(true);

  const plugins = ['react-native-reanimated/plugin'];

  if (process.env.NODE_ENV === 'production') {
    plugins.splice(1, 0, [
      'transform-remove-console',
      { exclude: ['error', 'warn'] },
    ]);
  }
//new changes
  return {
    presets: ['babel-preset-expo', 'nativewind/babel'],
    plugins,
  };
};

module.exports = function (api) {
  api.cache(true);

  const plugins = [
    'nativewind/babel',
    'react-native-reanimated/plugin', // must stay last
  ];

  if (process.env.NODE_ENV === 'production') {
    plugins.splice(1, 0, [
      'transform-remove-console',
      { exclude: ['error', 'warn'] },
    ]);
  }

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};

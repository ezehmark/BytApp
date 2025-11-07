// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Optional: only remove console logs in production using Metro’s built-in transformer
if (process.env.NODE_ENV === "production") {
  config.transformer.minifierConfig = {
    compress: { drop_console: true },
  };
}

module.exports = config;

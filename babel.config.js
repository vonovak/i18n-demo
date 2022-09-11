module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset", "babel-preset-expo"],
    plugins: ["babel-plugin-fbt", "babel-plugin-fbt-runtime", "macros"],
  };
};

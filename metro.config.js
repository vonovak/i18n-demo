// changes needed to support lingui cli
const nodeLibsInRn = require("node-libs-browser");

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: {
      ...nodeLibsInRn,
      fs: require.resolve("fs-extra"),
    },
    sourceExts: ["jsx", "js", "ts", "tsx", "mjs", "svg"],
    // resolverMainFields: ['react-native', 'sbmodern', 'browser', 'main'],
  },
};

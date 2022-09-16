// exclusionList is a function that takes an array of regexes and combines
// them with the default exclusions to return a single regex.
// please see: https://stackoverflow.com/a/41963217/8791773 for more info
const {getDefaultConfig} = require('metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');
const {components} = require('./export.config.json');
const {buildDir} = require('./buildConstants');

// get all package.json files from build directory
const getComponentsBuildPath = () => {
  const componentsList = Object.keys(components);
  return componentsList.map(dir => `${buildDir}/${dir}/package.json`);
};

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
      resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
      blacklistRE: exclusionList(getComponentsBuildPath()),
    },
  };
})();

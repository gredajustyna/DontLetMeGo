const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration for your React Native project
 * https://reactnative.dev/docs/metro
 *
 * This is a basic configuration that can be extended to fit your project needs.
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

// Your custom configuration to extend the default Metro configuration
const customConfig = {
  resolver: {
    // Add your custom file extensions if needed, for example:
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'],

    // Setup alias paths in your project
    extraNodeModules: {
      components: './components',
    },
  },

  // Add more configurations if required
  watchFolders: ['./', './node_modules'],
};

module.exports = mergeConfig(defaultConfig, customConfig);

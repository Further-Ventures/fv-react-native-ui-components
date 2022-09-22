module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/components/Elevation/*.stories.tsx',
    '../src/components/Icon/*.stories.tsx',
    '../src/components/Theme/*.stories.tsx',
    '../src/components/Text/*.stories.tsx',
    '../src/components/TextLink/*.stories.tsx',
    '../src/components/TextArea/*.stories.tsx',
    '../src/components/Button/*.stories.tsx',
    '../src/components/Chip/*.stories.tsx',
    '../src/components/Tag/*.stories.tsx',
    '../src/components/Input/*.stories.tsx',
    '../src/components/PasswordInput/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-react-native-web',
    './customAddons/yarnInstall/preset.ts',
  ],
  framework: '@storybook/react',
  webpackFinal: config => {
    // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
    const fileLoaderRule = config.module.rules.find(
      rule => rule.test && rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });

    return config;
  },
};

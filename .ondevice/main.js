module.exports = {
  stories: [
    '../src/components/Elevation/*.stories.tsx',
    '../src/components/Icon/*.stories.tsx',
    '../src/components/Loader/*.stories.tsx',
    '../src/components/Theme/*.stories.tsx',
    '../src/components/Text/*.stories.tsx',
    '../src/components/TextArea/*.stories.tsx',
    '../src/components/Button/*.stories.tsx',
    '../src/components/Chip/*.stories.tsx',
    '../src/components/Tag/*.stories.tsx',
    '../src/components/Input/*.stories.tsx',
    '../src/components/TextLink/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-backgrounds',
  ],
};

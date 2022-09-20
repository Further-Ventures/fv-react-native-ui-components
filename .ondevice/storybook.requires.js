/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
} from "@storybook/react-native";

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";

import { decorators, parameters } from "./preview";

if (decorators) {
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

const getStories = () => {
  return [
    require("../src/components/Elevation/Elevation.stories.tsx"),
    require("../src/components/Icon/Icon.stories.tsx"),
    require("../src/components/Loader/Loader.stories.tsx"),
    require("../src/components/Theme/Theme.stories.tsx"),
    require("../src/components/Text/Text.stories.tsx"),
    require("../src/components/TextArea/TextArea.stories.tsx"),
    require("../src/components/Button/Button.stories.tsx"),
    require("../src/components/Chip/Chip.stories.tsx"),
    require("../src/components/Tag/Tag.stories.tsx"),
    require("../src/components/Input/Input.stories.tsx"),
  ];
};

configure(getStories, module, false);

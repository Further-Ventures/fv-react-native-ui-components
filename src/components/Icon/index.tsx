import React, {Suspense} from 'react';
import {Text} from 'react-native';
import {SvgProps} from 'react-native-svg';
// @ts-ignore
import loadable from '@loadable/component';

export interface IIconProps extends SvgProps {
  variant?: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone';
  name: string;
}

const Icon: React.FC<IIconProps> = ({
  variant,
  name,
  width = 24,
  height = 24,
  fill = '#000',
  ...rest
}) => {
  const SvgContent = React.lazy(
    () => import(`@material-design-icons/svg/filled/home.svg`),
  );

  return (
    <Suspense fallback={<Text>?</Text>}>
      <SvgContent width={width} height={height} fill={fill} {...rest} />
    </Suspense>
  );
};

export default Icon;

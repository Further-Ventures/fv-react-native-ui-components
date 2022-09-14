import React from 'react';
import useStyles from './styles';
import Button, {IButtonProps} from '../Button';
import {useTheme} from '../Theme';

export interface IChip extends Omit<IButtonProps, 'size' | 'variant'> {
  size?: 'small' | 'large';
  variant?: 'contained' | 'outlined';
}

const Chip: React.FC<IChip> = props => {
  const {size = 'small', variant = 'contained', ...rest} = props;
  const styles = useStyles();
  const {theme} = useTheme();

  const iconProps = {
    color: theme.grey.dark,
    filled: true,
    marginLeft: 0,
  };

  const pressedStyle = {
    backgroundColor: theme.grey.main,
  };

  return (
    <Button
      {...rest}
      shape="round"
      style={[styles[variant], styles[size]]}
      textProps={{
        size: size === 'small' ? 10 : 14,
        color: theme.grey.dark,
        weight: '400',
        style: {},
      }}
      iconProps={iconProps}
      pressedStyle={pressedStyle}
    />
  );
};

export default Chip;

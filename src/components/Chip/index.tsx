import React from 'react';
import ButtonBridge, { IButtonBridge } from '../ButtonBridge';
import useStyles from './styles';

const Chip = (
  props: Pick<IButtonBridge, 'label' | 'size' | 'variant' | 'iconLeft' | 'iconRight' | 'disabled'>
) => {
  const styles = useStyles();
  return <ButtonBridge {...props} style={styles.default} />;
};

export default Chip;

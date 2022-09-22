import React from 'react';
import ButtonBridge, { IButtonBridge } from '../ButtonBridge';
import useStyles from './styles';

const Chip = (props: IButtonBridge) => {
  const styles = useStyles();
  return <ButtonBridge {...props} shape='curved' style={styles.default} />;
};

export default Chip;

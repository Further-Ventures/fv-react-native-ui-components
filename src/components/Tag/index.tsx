import React from 'react';
import ButtonBridge, {IButtonBridge} from '../ButtonBridge';
import useStyles from './styles';

const Tag = (
  props: Pick<
    IButtonBridge,
    'label' | 'size' | 'variant' | 'iconLeft' | 'iconRight' | 'disabled'
  >,
) => {
  const styles = useStyles();

  return <ButtonBridge {...props} shape="round" style={styles.default} />;
};

export default Tag;

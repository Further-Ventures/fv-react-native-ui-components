import React from 'react';
import { ISelect, IContentSelectItem, IContentSelect } from './types';
import { isContentSelect } from './utils';
import ContentSelect from './ContentSelect';
import RegularSelect from './RegularSelect';

const Select = <T,>(props: ISelect<T>) =>
  isContentSelect(props) ? <ContentSelect {...props} /> : <RegularSelect {...props} />;

Select.displayName = 'Select';

export default Select;
export type { IContentSelectItem, ISelect, IContentSelect };

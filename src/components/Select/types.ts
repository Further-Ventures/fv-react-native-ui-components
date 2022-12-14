import React from 'react';
import { IMultiSelect } from '../MultiSelect';
import { ContentFunc } from '../Input/BaseInputLayout';

export interface IRegularSelect<T>
  extends Omit<IMultiSelect<T>, 'onChange' | 'values' | 'selectedType' | 'selection'> {
  onChange: (value: T | undefined) => void;
  value?: T;
  noneLabel?: string;
}

export interface IContentSelectItem<T> {
  content: React.ReactNode | ContentFunc;
  value: T;
}

export interface IContentSelect<T> extends Omit<IRegularSelect<T>, 'items' | 'label' | 'onChange'> {
  onChange?: (value: T | undefined) => void;
  items?: IContentSelectItem<T>[];
  value?: T;
}

export type ISelect<T> = IRegularSelect<T> | IContentSelect<T>;

import { IContentSelect, ISelect } from './types';

export function isContentSelect<T>(props: ISelect<T>): props is IContentSelect<T> {
  return (props as IContentSelect<T>).items?.[0]?.content !== undefined;
}

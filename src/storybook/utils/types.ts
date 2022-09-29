// type utility to make specific props optional
export type PartialProperties<T, OptionalProps extends keyof T> = Partial<Pick<T, OptionalProps>> &
  Omit<T, OptionalProps>;

// type utility to make specific props required
export type RequiredProperties<T, RequiredProps extends keyof T> = Required<
  Pick<T, RequiredProps>
> &
  Omit<T, RequiredProps>;

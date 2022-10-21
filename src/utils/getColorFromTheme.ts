import { defaultTheme } from '../components/Theme/defaultTheme';

type TPathsToStringProps<T> = T extends string
  ? []
  : {
      [K in Extract<keyof T, string>]: [K, ...TPathsToStringProps<T[K]>];
    }[Extract<keyof T, string>];

type TJoin<T extends string[], D extends string> = T extends []
  ? never
  : T extends [infer F]
  ? F
  : T extends [infer F, ...infer R]
  ? F extends string
    ? `${F}${D}${TJoin<Extract<R, string[]>, D>}`
    : never
  : string;
type TDefaultThemeColor = Omit<typeof defaultTheme, 'fontFamily'>;
type TDefaultThemeTextColor = Pick<TDefaultThemeColor, 'text' | 'error' | 'grey' | 'primary'>;
export type TPalette<TIsAnyColor = void, TOnlyText = void> = TIsAnyColor extends true
  ? string
  : TJoin<
      TPathsToStringProps<TOnlyText extends true ? TDefaultThemeTextColor : TDefaultThemeColor>,
      '-'
    >;

export function getColorFromTheme<TIsAnyColor = void, TOnlyText = void>(
  text: TPalette<TIsAnyColor, TOnlyText>
) {
  const arr = text.split('-');
  let obj: any = defaultTheme;
  for (let i = 0; i < arr.length; i++) {
    const key: string = arr[i];
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === 'string') {
        return obj[key];
      } else {
        obj = obj[key];
      }
    }
  }
  return text;
}

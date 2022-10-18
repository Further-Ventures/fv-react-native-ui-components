export type ItemWidth = 'small' | 'medium' | 'large' | number;
export type ItemHeight = 'thin' | 'thick';

export const getWidth = (itemWidth: ItemWidth | number): number => {
  if (!isNaN(+itemWidth)) {
    return itemWidth as number;
  }
  switch (itemWidth) {
    case 'small':
      return 136;
    case 'medium':
      return 200;
    case 'large':
      return 343;
  }
  return 0;
};

export const getHeight = (itemHeight: ItemHeight) => (itemHeight === 'thin' ? 36 : 48);

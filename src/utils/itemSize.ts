export type ItemWidth = 'small' | 'medium' | 'large';
export type ItemHeight = 'thin' | 'thick';

export const getWidth = (itemWidth: ItemWidth) => {
  switch (itemWidth) {
    case 'small':
      return 136;
    case 'medium':
      return 200;
    case 'large':
      return 343;
  }
};

export const getHeight = (itemHeight: ItemHeight) => (itemHeight === 'thin' ? 36 : 48);

import { createUseStyles } from '../Theme';

export const sizeToHeightMap: Record<number, number> = {
  48: 60,
  32: 48,
  24: 36,
  20: 30,
  18: 27,
  16: 24,
  14: 17,
  12: 18,
  10: 15,
};

export default createUseStyles((theme, color) => ({
  'h1-bold': {
    color: color,
    fontFamily: theme.fontFamily.bold,
    fontWeight: '700',
    fontSize: 48,
    lineHeight: sizeToHeightMap[48],
  },
  'h1-medium': {
    color: color,
    fontFamily: theme.fontFamily.medium,
    fontWeight: '500',
    fontSize: 48,
    lineHeight: sizeToHeightMap[48],
  },
  'h1-regular': {
    color: color,
    fontFamily: theme.fontFamily.regular,
    fontWeight: '400',
    fontSize: 48,
    lineHeight: sizeToHeightMap[48],
  },

  'h2-bold': {
    color: color,
    fontFamily: theme.fontFamily.bold,
    fontWeight: '700',
    fontSize: 32,
    lineHeight: sizeToHeightMap[32],
  },
  'h2-medium': {
    color: color,
    fontFamily: theme.fontFamily.medium,
    fontWeight: '500',
    fontSize: 32,
    lineHeight: sizeToHeightMap[32],
  },
  'h2-regular': {
    color: color,
    fontFamily: theme.fontFamily.regular,
    fontWeight: '400',
    fontSize: 32,
    lineHeight: sizeToHeightMap[32],
  },

  'h3-bold': {
    color: color,
    fontFamily: theme.fontFamily.bold,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: sizeToHeightMap[24],
  },
  'h3-medium': {
    color: color,
    fontFamily: theme.fontFamily.medium,
    fontWeight: '500',
    fontSize: 24,
    lineHeight: sizeToHeightMap[24],
  },
  'h3-regular': {
    color: color,
    fontFamily: theme.fontFamily.regular,
    fontWeight: '400',
    fontSize: 24,
    lineHeight: sizeToHeightMap[24],
  },

  'h4-bold': {
    color: color,
    fontFamily: theme.fontFamily.bold,
    fontWeight: '700',
    fontSize: 20,
    lineHeight: sizeToHeightMap[20],
  },
  'h4-medium': {
    color: color,
    fontFamily: theme.fontFamily.medium,
    fontWeight: '500',
    fontSize: 20,
    lineHeight: sizeToHeightMap[20],
  },
  'h4-regular': {
    color: color,
    fontFamily: theme.fontFamily.regular,
    fontWeight: '400',
    fontSize: 20,
    lineHeight: sizeToHeightMap[20],
  },

  'p1-bold': {
    color: color,
    fontFamily: theme.fontFamily.bold,
    fontWeight: '700',
    fontSize: 18,
    lineHeight: sizeToHeightMap[18],
  },
  'p1-medium': {
    color: color,
    fontFamily: theme.fontFamily.medium,
    fontWeight: '500',
    fontSize: 18,
    lineHeight: sizeToHeightMap[18],
  },
  'p1-regular': {
    color: color,
    fontFamily: theme.fontFamily.regular,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: sizeToHeightMap[18],
  },

  'p2-bold': {
    color: color,
    fontFamily: theme.fontFamily.bold,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: sizeToHeightMap[16],
  },
  'p2-medium': {
    color: color,
    fontFamily: theme.fontFamily.medium,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: sizeToHeightMap[16],
  },
  'p2-regular': {
    color: color,
    fontFamily: theme.fontFamily.regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: sizeToHeightMap[16],
  },

  'description-bold': {
    color: color,
    fontFamily: theme.fontFamily.bold,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: sizeToHeightMap[12],
  },
  'description-medium': {
    color: color,
    fontFamily: theme.fontFamily.medium,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: sizeToHeightMap[12],
  },
  'caption-regular': {
    color: color,
    fontFamily: theme.fontFamily.regular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: sizeToHeightMap[12],
  },
  'small-regular': {
    color: color,
    fontFamily: theme.fontFamily.regular,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: sizeToHeightMap[10],
  },

  'label-16-medium': {
    color: color,
    fontFamily: theme.fontFamily.medium,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: sizeToHeightMap[16],
  },
  'label-14-medium': {
    color: color,
    fontFamily: theme.fontFamily.medium,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: sizeToHeightMap[14],
  },
  'label-10-medium': {
    color: color,
    fontFamily: theme.fontFamily.medium,
    fontWeight: '500',
    fontSize: 10,
    lineHeight: sizeToHeightMap[10],
  },
  'label-14-regular': {
    color: color,
    fontFamily: theme.fontFamily.regular,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: sizeToHeightMap[14],
  },
  'label-14-bold': {
    color: color,
    fontFamily: theme.fontFamily.bold,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: sizeToHeightMap[14],
  },
}));

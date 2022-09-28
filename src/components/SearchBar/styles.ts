import { createUseStyles } from '../Theme';

export default createUseStyles(() => ({
  wrapper: {},
  bottomContent: {},
  dropdown: {
    position: 'absolute',
    top: 0,
    left: 1,
    right: 1,
    borderRadius: 8,
    paddingVertical: 8,
    marginHorizontal: 1,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    paddingHorizontal: 16,
  },
  dropdownText: { marginLeft: 12 },
  infoTextWrapper: {
    heigth: 48,
    paddingHorizontal: 12,
    marginTop: 8,
  },
}));

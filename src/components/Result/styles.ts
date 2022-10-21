import { THEME } from '@theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  resultContainer: {
    width: 120,
    height: 60,
    borderRadius: 5,
    backgroundColor: THEME.COLORS.SHAPE,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  textWon: {
    color: THEME.COLORS.SUCCESS,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
  },
  textTied: {
    color: THEME.COLORS.TIED,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
  },
  textLost: {
    color: THEME.COLORS.ALERT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
  },
})

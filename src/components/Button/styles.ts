import { StyleSheet } from 'react-native'
import { THEME } from '@theme'

export const styles = StyleSheet.create({
  ButtonContainer: {
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 50,
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icon: {
    fontSize: 60,
  },
  TextButton: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
  },
})

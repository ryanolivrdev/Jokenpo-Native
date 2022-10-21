import { StyleSheet } from 'react-native'
import { THEME } from '@theme'

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.LG,
  },
  legend: {
    color: THEME.COLORS.CAPTION_300,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
  },
})

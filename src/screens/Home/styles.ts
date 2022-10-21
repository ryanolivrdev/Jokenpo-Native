import { THEME } from '@theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
  },
  legend: {
    color: THEME.COLORS.CAPTION_300,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    marginBottom: 20,
    marginTop: 20,
  },
  homeWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
})

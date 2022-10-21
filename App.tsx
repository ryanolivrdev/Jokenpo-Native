/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet } from 'react-native'

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter'

import { THEME } from '@theme'
import { Loading } from '@components'
import { Home } from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  })

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {fontsLoaded ? <Home /> : <Loading />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
  },
})

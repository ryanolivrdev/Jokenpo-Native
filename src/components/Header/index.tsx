import { Text, View } from 'react-native'
import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Pedra Papel Tesoura</Text>
      <Text style={styles.legend}>O jogo</Text>
    </View>
  )
}

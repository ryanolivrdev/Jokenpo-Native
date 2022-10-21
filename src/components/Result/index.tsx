import { Text, View } from 'react-native'
import { styles } from './styles'

export interface ResultProps {
  resultGame: string
}

export function Result({ resultGame }: ResultProps) {
  function gerenateTextResult(text: string) {
    switch (text) {
      case 'Você ganhou':
        return <Text style={styles.textWon}>Você ganhou</Text>
      case 'O jogo empatou':
        return <Text style={styles.textTied}>O jogo empatou</Text>
      case 'Você perdeu':
        return <Text style={styles.textLost}>Você perdeu</Text>
      default:
        return <Text>Error</Text>
    }
  }

  return (
    <View style={styles.resultContainer}>{gerenateTextResult(resultGame)}</View>
  )
}

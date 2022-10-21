import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

interface ButtonProps {
  text: string
  item: 'Rock' | 'Paper' | 'Scissor'
  userChoice: (choice: string) => void
}

export function Button({ text, item, userChoice }: ButtonProps) {
  const renderItem = (item: string) => {
    switch (item) {
      case 'Rock':
        return <Text style={styles.Icon}>🪨</Text>
      case 'Paper':
        return <Text style={styles.Icon}>📃</Text>
      case 'Scissor':
        return <Text style={styles.Icon}>✂️</Text>
      default:
        return <Text>Error</Text>
    }
  }

  function HandlePress(choice: string) {
    userChoice(choice)
  }

  return (
    <TouchableOpacity
      style={styles.ButtonContainer}
      onPress={() => HandlePress(item)}
    >
      {renderItem(item)}
      <Text style={styles.TextButton}>{text}</Text>
    </TouchableOpacity>
  )
}

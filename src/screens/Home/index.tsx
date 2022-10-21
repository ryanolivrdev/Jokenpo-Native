import { Text, View } from 'react-native'

import { Header, Button } from '@components'

import { styles } from './styles'
import { useState } from 'react'
import { testPaper, testRock, testScissor } from 'src/utils/index'
import { Result } from 'src/components/Result'

export function Home() {
  const [gameResult, setGameResult] = useState<string>('')

  function game(choice: string) {
    setGameResult('')

    switch (choice) {
      case 'Rock':
        setGameResult(() => testRock())
        break
      case 'Paper':
        setGameResult(() => testPaper())
        break
      case 'Scissor':
        setGameResult(() => testScissor())
        break
      default:
        setGameResult('Algo deu errado')
    }
  }

  return (
    <View style={styles.homeContainer}>
      <Header />
      <Text style={styles.legend}>Escolha um dos itens abaixo</Text>
      <View style={styles.homeWrapper}>
        <Button item="Rock" text="Pedra" userChoice={game} />
        <Button item="Paper" text="Papel" userChoice={game} />
        <Button item="Scissor" text="Tesoura" userChoice={game} />
      </View>
      {gameResult && <Result resultGame={gameResult} />}
    </View>
  )
}

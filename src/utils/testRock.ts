import { generateCpuChoice } from 'src/helpers/generateCpuChoice'

export function testRock() {
  const cpuChoice = generateCpuChoice()

  switch (cpuChoice) {
    case 0:
      return 'O jogo empatou'
    case 1:
      return 'Você perdeu'
    case 2:
      return 'Você ganhou'
    default:
      return 'Ocorreu algum erro'
  }
}

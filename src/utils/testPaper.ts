import { generateCpuChoice } from 'src/helpers/generateCpuChoice'

export function testPaper() {
  const cpuChoice = generateCpuChoice()

  switch (cpuChoice) {
    case 0:
      return 'Você ganhou'
    case 1:
      return 'O jogo empatou'
    case 2:
      return 'Você perdeu'
    default:
      return 'Ocorreu algum erro'
  }
}

import { generateCpuChoice } from 'src/helpers/generateCpuChoice'

export function testScissor() {
  const cpuChoice = generateCpuChoice()

  switch (cpuChoice) {
    case 0:
      return 'Você perdeu'
    case 1:
      return 'Você ganhou'
    case 2:
      return 'O jogo empatou'
    default:
      return 'Ocorreu algum erro'
  }
}

import Calculo from './Calculo'

export default class Radiciacao extends Calculo {
  public calcular(number1: number, number2: number): number {
    return Math.pow(number1, 1 / number2)
  }
}

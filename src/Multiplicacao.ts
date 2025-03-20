import Calculo from './Calculo'

export default class Multiplicacao extends Calculo {
  public calcular(number1: number, number2: number): number {
    return number1 * number2
  }
}

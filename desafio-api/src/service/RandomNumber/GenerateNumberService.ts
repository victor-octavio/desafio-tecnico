export class GenerateNumberService {
  generate() {
    const numbers: number[] = []

    numbers.push(this.getRandomNumber(numbers))
    numbers.push(this.getRandomNumber(numbers))
    numbers.push(this.getRandomNumber(numbers))
    numbers.push(this.getRandomNumber(numbers))
    numbers.push(this.getRandomNumber(numbers))

    return {
      bet1: numbers[0],
      bet2: numbers[1],
      bet3: numbers[2],
      bet4: numbers[3],
      bet5: numbers[4]
    }
  }

  getRandomNumber(usedNumbers: number[]) {
    var random: number
    do {
      random = Math.floor(Math.random() * (50 - 1 + 1) + 1)
    } while (usedNumbers.includes(random))

    return random
  }
}

export default GenerateNumberService

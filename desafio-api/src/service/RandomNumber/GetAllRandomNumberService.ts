import RandomNumber from '../../entity/RandomNumber/RandomNumber'
import { randomNumberRepository } from '../../repository/RandomNumber'

export class GetAllRandomNumberService {
  async execute(): Promise<RandomNumber[]> {
    const randomNumbers = await randomNumberRepository.find()
    return randomNumbers
  }
}

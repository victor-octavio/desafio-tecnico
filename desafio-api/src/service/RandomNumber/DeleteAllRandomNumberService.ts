import { randomNumberRepository } from '../../repository/RandomNumber'

export class DeleteAllRandomNumberService {
  async execute() {
    const randomNumbers = await randomNumberRepository.delete({})
    return randomNumbers
  }
}

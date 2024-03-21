import { z } from 'zod'
import randomNumberSchema from '../schema/RandomNumberSchema'
import RandomNumber from '../../entity/RandomNumber/RandomNumber'
import { randomNumberRepository } from '../../repository/RandomNumber'

type RandomNumberRequest = z.infer<typeof randomNumberSchema>

export class CreateRandomNumberService {
  async execute(randomNumber: RandomNumberRequest): Promise<RandomNumber> {
    const validatedRandomNumber = randomNumberSchema.parse(randomNumber)
    const newRandomNumber = randomNumberRepository.create(validatedRandomNumber)

    await randomNumberRepository.save(newRandomNumber)
    return newRandomNumber
  }
}

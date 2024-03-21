import { AppDataSource } from '../database/data-source'
import RandomNumber from '../entity/RandomNumber/RandomNumber'

export const randomNumberRepository = AppDataSource.getRepository(RandomNumber)

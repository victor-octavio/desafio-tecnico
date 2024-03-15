import { getRepository } from 'typeorm'
import User from '../entity/User'
import { AppDataSource } from '../database/data-source'
import { userRepository } from '../repository/UserRepository'

export class GetAllUserService {
  async execute(): Promise<User[]> {
    const users = await userRepository.find()
    return users
  }
}

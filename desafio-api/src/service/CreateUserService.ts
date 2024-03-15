import { User } from '../entity/User'
import { userRepository } from '../repository/UserRepository'
import userSchema from './schema/UserSchema'
import { z } from 'zod'

type UserRequest = z.infer<typeof userSchema>

export class CreateUserService {
  async execute(user: UserRequest): Promise<User> {
    const validatedUser = userSchema.parse(user)
    const newUser = userRepository.create(validatedUser)

    await userRepository.save(newUser)
    return newUser
  }
}
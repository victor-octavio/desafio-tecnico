import { userRepository } from '../../repository/UserRepository'

export class DeleteAllUserService {
  async execute() {
    const users = await userRepository.delete({})
    return users
  }
}

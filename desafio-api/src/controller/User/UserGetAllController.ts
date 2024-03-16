import { Request, Response } from 'express'
import { GetAllUserService } from '../../service/User/GetAllUserService'

export class UserGetAllController {
  async handle(request: Request, response: Response) {
    const userService = new GetAllUserService()
    const users = await userService.execute()
    return response.json(users)
  }
}

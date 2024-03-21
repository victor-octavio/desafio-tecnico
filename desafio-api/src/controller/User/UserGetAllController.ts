import { Request, Response } from 'express'
import { GetAllUserService } from '../../service/User/GetAllUserService'

export class UserGetAllController {
  async handle(request: Request, response: Response) {
    try {
      const userService = new GetAllUserService()
      const users = await userService.execute()
      return response.json(users)
    } catch (error) {
      console.error(error)
      return response.status(500).json({
        message: 'Fail fetching user data!'
      })
    }
  }
}

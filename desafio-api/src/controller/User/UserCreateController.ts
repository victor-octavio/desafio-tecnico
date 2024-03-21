import { Request, Response } from 'express'
import { CreateUserService } from '../../service/User/CreateUserService'

export class UserCreateController {
  async handle(request: Request, response: Response) {
    try {
      const { name, cpf, bet1, bet2, bet3, bet4, bet5 } = request.body
      const service = new CreateUserService()
      const result = await service.execute({ name, cpf, bet1, bet2, bet3, bet4, bet5 })

      if (result instanceof Error) {
        console.error(result.message)
        return response.status(400).json(result.message)
      }

      return response.status(201).json(result)
    } catch (error) {
      console.error(error)
      return response.status(500).json({
        message: 'Fail creating a new bet!'
      })
    }
  }
}

import { Request, Response } from 'express'
import { CreateUserService } from '../../service/User/CreateUserService'
import GenerateNumberService from '../../service/RandomNumber/GenerateNumberService'

export class UserCreateRandomBetController {
  async handle(request: Request, response: Response) {
    const { name, cpf } = request.body
    const { bet1, bet2, bet3, bet4, bet5 } = new GenerateNumberService().generate()

    const service = new CreateUserService()
    const result = await service.execute({ name, cpf, bet1, bet2, bet3, bet4, bet5 })

    if (result instanceof Error) {
      console.error(result.message)
      return response.status(400).json(result.message)
    }

    return response.status(201).json(result)
  }
}

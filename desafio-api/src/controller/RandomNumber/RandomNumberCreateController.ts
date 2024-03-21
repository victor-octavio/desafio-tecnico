import { Request, Response } from 'express'
import { CreateRandomNumberService } from '../../service/RandomNumber/CreateRandomNumberService'
import GenerateNumberService from '../../service/RandomNumber/GenerateNumberService'

export class RandomNumberCreateController {
  async handle(request: Request, response: Response) {
    try {
      const service = new CreateRandomNumberService()
      const result = await service.execute(new GenerateNumberService().generate())

      if (result instanceof Error) {
        return response.status(400).json(result.message)
      }

      return response.json(result)
    } catch (error) {
      console.error(error)
      return response.status(500).json({ message: 'Server Error!' })
    }
  }
}

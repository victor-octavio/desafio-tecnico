import { Request, Response } from 'express'
import { GetAllRandomNumberService } from '../../service/RandomNumber/GetAllRandomNumberService'

export class RandomNumberGetAllController {
  async handle(request: Request, response: Response) {
    try {
      const randomNumberService = new GetAllRandomNumberService()
      const randomNumbers = await randomNumberService.execute()
      return response.json(randomNumbers)
    } catch (error) {
      console.error(error)
      return response.status(500).json({
        message: 'Fail to fetch random number!'
      })
    }
  }
}

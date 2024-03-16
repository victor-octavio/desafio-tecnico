import { Request, Response } from 'express'
import { GetAllRandomNumberService } from '../../service/RandomNumber/GetAllRandomNumberService'

export class RandomNumberGetAllController {
  async handle(request: Request, response: Response) {
    const randomNumberService = new GetAllRandomNumberService()
    const randomNumbers = await randomNumberService.execute()
    return response.json(randomNumbers)
  }
}

import { Request, Response } from 'express'
import { DeleteAllUserService } from '../service/User/DeleteAllUserService'
import { DeleteAllRandomNumberService } from '../service/RandomNumber/DeleteAllRandomNumberService'

export class StartNewBetsController {
  async handle(request: Request, response: Response) {
    try {
      await new DeleteAllUserService().execute()
      await new DeleteAllRandomNumberService().execute()
      return response.status(200).send('Ok')
    } catch (error) {
      response.status(500).send('Fail to start new bets')
    }
  }
}

import { Request, Response } from 'express'
import { GetAllUserService } from '../service/User/GetAllUserService'
import { GetAllRandomNumberService } from '../service/RandomNumber/GetAllRandomNumberService'
import User from '../entity/User/User'
import RandomNumber from '../entity/RandomNumber/RandomNumber'

export class FindBetsController {
  async handle(request: Request, response: Response) {
    try {
      const userService = new GetAllUserService()
      const randomNumberService = new GetAllRandomNumberService()

      const randomNumbers: RandomNumber[] = await randomNumberService.execute()
      const bets: User[] = await userService.execute()
      const winnerBets: User[] = []

      bets.forEach((bet: User) => {
        const betArray: number[] = [bet.bet1, bet.bet2, bet.bet3, bet.bet4, bet.bet5]
        const rightBets: number[] = betArray.filter(number =>
          randomNumbers.some(
            randomNumber =>
              randomNumber.bet1 === number ||
              randomNumber.bet2 === number ||
              randomNumber.bet3 === number ||
              randomNumber.bet4 === number ||
              randomNumber.bet5 === number
          )
        )
        if (rightBets.length === 5) winnerBets.push(bet)
      })
      return response.json(winnerBets)
    } catch (error) {
      return response.status(500).json({ error: 'Fail to find the winners:' })
    }
  }
}

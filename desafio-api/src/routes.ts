import { Router } from 'express'
import { UserCreateController } from './controller/User/UserCreateController'
import { UserGetAllController } from './controller/User/UserGetAllController'
import { RandomNumberCreateController } from './controller/RandomNumber/RandomNumberCreateController'
import { RandomNumberGetAllController } from './controller/RandomNumber/RandomNumberGetAllController'
import { FindBetsController } from './controller/FindBetsController'
import { UserCreateRandomBetController } from './controller/User/UserCreateRandomBetController'
import { StartNewBetsController } from './controller/StartNewBetsController'

const routes = Router()

routes
  .post('/apostas', new UserCreateController().handle)
  .post('/aposta-surpresinha', new UserCreateRandomBetController().handle)
  .get('/apostas', new UserGetAllController().handle)

  .post('/sorteio', new RandomNumberCreateController().handle)
  .get('/sorteio', new RandomNumberGetAllController().handle)

  .get('/apuracao', new FindBetsController().handle)

  .delete('/novas-apostas', new StartNewBetsController().handle)
export { routes }

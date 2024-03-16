import { Router } from 'express'
import { UserCreateController } from './controller/User/UserCreateController'
import { UserGetAllController } from './controller/User/UserGetAllController'
import { RandomNumberCreateController } from './controller/RandomNumber/RandomNumberCreateController'
import { RandomNumberGetAllController } from './controller/RandomNumber/RandomNumberGetAllController'

const routes = Router()

routes
  .post('/nova-aposta', new UserCreateController().handle)
  .get('/apostas', new UserGetAllController().handle)
  .post('/sorteio', new RandomNumberCreateController().handle)
  .get('/sorteio', new RandomNumberGetAllController().handle)
export { routes }

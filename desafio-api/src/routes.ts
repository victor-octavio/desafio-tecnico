import { Router } from 'express'
import { UserCreateController } from './controller/UserCreateController'
import { UserGetAllController } from './controller/UserGetAllController'

const routes = Router()

routes
  .post('/nova-aposta', new UserCreateController().handle)
  .get('/apostas', new UserGetAllController().handle)

export { routes }

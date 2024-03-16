import 'reflect-metadata'
import { DataSource } from 'typeorm'

import User from '../entity/User/User'
import RandomNumber from '../entity/RandomNumber/RandomNumber'
import { CreateUsersTable1710461281431 } from './migrations/1710461281431-CreateUsersTable'
import { CreateTableRandomNumber1710522028575 } from './migrations/1710522028575-CreateTableRandomNumber'
import { DropColumnApostas1710509084915 } from './migrations/1710509084915-DropColumnApostas'


export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'teste',
  synchronize: true,
  logging: false,
  entities: [User, RandomNumber],
  migrations: [CreateUsersTable1710461281431, DropColumnApostas1710509084915,CreateTableRandomNumber1710522028575],
  subscribers: []
})

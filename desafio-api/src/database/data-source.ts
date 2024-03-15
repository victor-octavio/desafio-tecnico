import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUsersTable1710461281431 } from './migrations/1710461281431-CreateUsersTable'
import User from "../entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "teste",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1710461281431],
    subscribers: [],
})

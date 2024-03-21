import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('varchar', { length: 100, nullable: false})
    name: string

    @Column('varchar', { length: 11, nullable: false})
    cpf: string

    @Column()   
    bet1: number

    @Column()
    bet2: number

    @Column()
    bet3: number

    @Column()
    bet4: number

    @Column()
    bet5: number
}

export default User
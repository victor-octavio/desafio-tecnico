import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('randomNumber')
export class RandomNumber {
    @PrimaryGeneratedColumn('increment')
    id: number

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

export default RandomNumber
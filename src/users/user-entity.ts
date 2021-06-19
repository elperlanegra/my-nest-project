import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    fullName: string;

    @Column('date')
    birthday: Date;

    @Column()
    isActive: boolean;
}


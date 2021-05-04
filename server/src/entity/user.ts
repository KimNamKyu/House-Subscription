import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class user {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    email: string;

    @Column()
    nickname: string;

    @Column()
    password: string;
}
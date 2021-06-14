import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class subscription {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    area: string;

    @Column()
    division: string;

    @Column()
    parcel: string;

    @Column()
    houseName: string;

    @Column()
    constructionCompany: string;

    @Column()
    telNum: string;

    @Column()
    announcement: string;

    @Column()
    period: string;

    @Column()
    winnersPeriod: string;

}
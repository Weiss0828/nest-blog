import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Swiper {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  path:string
}

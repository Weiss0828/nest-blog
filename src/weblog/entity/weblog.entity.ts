import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Weblog {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 30 })
  title: string;
  @Column()
  content: string;
  @Column()
  createDate: Date;
  @Column()
  updateDate: Date;
  @Column({ default: 0 })
  likes: number;
}

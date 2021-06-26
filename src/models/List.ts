import { AfterLoad, BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./Task";
import { User } from "./User";

@Entity()
export class List extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => User, user => user.lists, { eager: true })
  user: User;

  @OneToMany(() => Task, task => task.list)
  tasks: Task[];
};

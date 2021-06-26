import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { List } from "./List";

@Entity()
export class Task {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  done: boolean;

  @ManyToOne(() => List, list => list.tasks)
  list: List;
};

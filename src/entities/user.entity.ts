import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName: string = "";

  @Column()
  lastName: string = "";

  @Column()
  isActive: boolean = false;

  constructor(firstName: string, lastName: string, isActive: boolean) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isActive = isActive;
  }
}

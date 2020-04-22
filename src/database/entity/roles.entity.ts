import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { RolDTO } from "interfaces/roles.dto";

@Entity()
export class Roles implements RolDTO{
    
    @PrimaryGeneratedColumn()
  id: number;

    @Column({ type: "varchar", length: 50 })
  description: string;
    
    @Column()
  @CreateDateColumn()
  createdAt: Date;
  
    @Column()
  @UpdateDateColumn()
  updatedAt: Date;
} 
import {hashSync} from 'bcryptjs'
import { 
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "varchar", length: 50})
    firstName: string

    @Column({type: "varchar", length: 50})
    lastName: string

    @Column({type: "varchar", length: 100, unique: true})
    email: string

    @Column({type: "varchar", length: 150})
    password: string

    @CreateDateColumn({type: "date"})
    createdAt: string

    @UpdateDateColumn({type: "date"})
    updatedAt: string

    @BeforeInsert()
    @BeforeUpdate()
    hash(): void {
        this.password = hashSync(this.password, 9)
    }
}

export {User}
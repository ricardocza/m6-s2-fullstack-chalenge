import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Contact } from "./contact.entity";

@Entity("clients")
class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "varchar", length: 50})
    name: string

    @Column({type: "varchar", length: 100, unique: true})
    email: string

    @Column({type: "varchar", length: 11})
    phone: string

    @CreateDateColumn({type: "date"})
    createdAt: string

    @UpdateDateColumn({type: "date"})
    updatedAt: string
    
    @DeleteDateColumn({type: "date"})
    deletedAt: string

    @OneToMany(() => Contact, (contact) => contact.client)
    contact: Contact[]
}

export {Client}
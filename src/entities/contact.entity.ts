import {
    Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
import { Client } from "./client.entity";

@Entity("contacts")
class Contact {
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
    
    @ManyToOne(() => Client, {onDelete: "CASCADE"})
    @JoinColumn()
    client: Client
}

export {Contact}
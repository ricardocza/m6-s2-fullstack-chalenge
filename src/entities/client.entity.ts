import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("clients")
class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "varchar", length: 50})
    name: string

    @Column({type: "varchar", length: 100})
    email: string

    @Column({type: "varchar", length: 11})
    telefone: string

    @CreateDateColumn({type: "date"})
    createdAt: string

    @UpdateDateColumn({type: "date"})
    updatedAt: string
    
    @DeleteDateColumn({type: "date"})
    deletedAt: string
}

export {Client}
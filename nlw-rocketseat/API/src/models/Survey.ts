import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'

@Entity("Surveys")
class Survey{
    @PrimaryColumn()
    readonly id: string;

    @Column() // se o nome da coluna for o mesmo deixar vazio, caso seja nome diferente colocar dentro do ("name")
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id) {

            this.id = uuid()
        }
    }
}

export {Survey};
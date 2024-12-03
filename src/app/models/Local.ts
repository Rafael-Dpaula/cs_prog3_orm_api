import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('tb_local')

class Local {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column("varchar")
    nome: string;
    
    @Column("varchar")
    latitude: string;

    @Column("varchar")
    logitude: string;
}
export default Local;
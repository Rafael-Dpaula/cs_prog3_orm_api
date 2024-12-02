import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('tb_artefato')

class Artefato {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column("varchar", { length: 8 })
    nome: string;
    
    @Column("float")
    peso: number;

    @Column("float")
    valor: number;
}
export default Artefato;
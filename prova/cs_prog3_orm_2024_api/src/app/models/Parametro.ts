import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('tb_parametro')
class Parametro {

    @PrimaryGeneratedColumn()
    codigo: number;

    @Column('text')
    chave: string;

    @Column('int')
    valor: number;

    @Column('date', {default: () => 'CURRENT_TIMESTAMP'})
    data_criacao: Date;
}
export default Parametro;
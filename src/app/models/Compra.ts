import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('tb_compra')

class Compra {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column('date', { default: () => 'CURRENT_TIMESTAMP' })
    data: Date;

    @Column("float")
    total: number;
}
export default Compra;
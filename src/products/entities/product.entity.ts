import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {


    @PrimaryGeneratedColumn({ name: 'id_producto' })
    idProducto: number;

    @Column({ type: 'nvarchar', length: 100, nullable: false })
    codigo: string;

    @Column({ type: 'bit', default: true })
    estado: boolean;

    @Column({ type: 'nvarchar', length: 255, nullable: false })
    descripcion: string;

    @Column({ type: 'nvarchar', length: 100, nullable: false })
    nombre: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    precioUnitario: number;

    @Column({ type: 'int', nullable: false })
    stock: number;

    @Column({ type: 'int', nullable: true })
    stockMinimo: number;




}

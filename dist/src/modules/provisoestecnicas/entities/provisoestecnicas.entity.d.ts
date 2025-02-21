import { BaseEntity } from '../../../shared/base.entity';
export declare class Provisoestecnicas extends BaseEntity {
    ProvisaoID: number;
    CompanhiaID: number;
    TipoProvisao: string;
    DataCalculo: Date;
    Valor: number;
}

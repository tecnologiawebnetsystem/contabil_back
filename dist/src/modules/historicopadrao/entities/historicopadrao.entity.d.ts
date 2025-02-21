import { BaseEntity } from '../../../shared/base.entity';
export declare class Historicopadrao extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    CodigoHistoricoPadrao: string | null;
    Descricao: string | null;
}

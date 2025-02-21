import { BaseEntity } from '../../../shared/base.entity';
export declare class Tipomovimentofip extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    CodigoTipoMovimento: number | null;
    Descricao: string | null;
}

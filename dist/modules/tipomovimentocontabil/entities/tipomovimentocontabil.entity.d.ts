import { BaseEntity } from '../../../shared/base.entity';
export declare class Tipomovimentocontabil extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    CodigoTipoMovimentoContabil: number | null;
    Descricao: string | null;
}

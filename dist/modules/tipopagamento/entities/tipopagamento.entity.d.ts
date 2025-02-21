import { BaseEntity } from '../../../shared/base.entity';
export declare class Tipopagamento extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    CodigoTipoPagamento: string | null;
    Descricao: string | null;
}

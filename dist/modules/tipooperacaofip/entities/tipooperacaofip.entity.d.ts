import { BaseEntity } from '../../../shared/base.entity';
export declare class Tipooperacaofip extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    CodigoTipoOperacao: number | null;
    Descricao: string | null;
}

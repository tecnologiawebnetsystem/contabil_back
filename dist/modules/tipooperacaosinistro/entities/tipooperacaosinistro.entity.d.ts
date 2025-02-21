import { BaseEntity } from '../../../shared/base.entity';
export declare class Tipooperacaosinistro extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    CodigoTipoOperacaoSinistro: string | null;
    Descricao: string | null;
}

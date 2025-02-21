import { BaseEntity } from '../../../shared/base.entity';
export declare class Tipopessoa extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    CodigoTipoPessoa: string | null;
    Descricao: string | null;
}

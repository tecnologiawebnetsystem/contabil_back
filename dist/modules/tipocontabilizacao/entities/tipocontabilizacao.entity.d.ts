import { BaseEntity } from '../../../shared/base.entity';
export declare class Tipocontabilizacao extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    TipoContabilizacao: string | null;
    Descricao: string | null;
}

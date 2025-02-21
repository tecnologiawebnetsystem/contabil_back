import { BaseEntity } from '../../../shared/base.entity';
export declare class Objetocontabilizacao extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    Objeto: string | null;
    Descricao: string | null;
    flgObjetoContabilizacaoAtivo: boolean | null;
}

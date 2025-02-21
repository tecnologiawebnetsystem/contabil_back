import { BaseEntity } from '../../../shared/base.entity';
export declare class Correntista extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    id_plano_contas: number | null;
    ContaAuxiliar: string | null;
    CodCorrentista: string | null;
}

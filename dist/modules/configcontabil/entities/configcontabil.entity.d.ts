import { BaseEntity } from '../../../shared/base.entity';
export declare class Configcontabil extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    id_eventos: number | null;
    id_objeto_contabilizacao: number | null;
    id_tipo_resseguradora: number | null;
    id_plano_contas: number | null;
    id_ramo_contabil: number | null;
    id_historico_padrao: number | null;
    id_tipo_natureza_contabilizacao: number | null;
    id_tipo_contabilizacao: number | null;
    flgContabiliza: boolean | null;
}

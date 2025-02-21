import { BaseEntity } from '../../../shared/base.entity';
export declare class Eventos extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    CodigoEvento: number | null;
    Descricao: string | null;
    ValorCoeficiente: number | null;
    id_modulo_contabil: number | null;
}

import { BaseEntity } from '../../../shared/base.entity';
export declare class Tiposeguradora extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    CodigoTipoResseguradora: string | null;
    Descricao: string | null;
}

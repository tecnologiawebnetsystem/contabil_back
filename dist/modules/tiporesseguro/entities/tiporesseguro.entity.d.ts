import { BaseEntity } from '../../../shared/base.entity';
export declare class Tiporesseguro extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    CodigoTipoResseguro: string | null;
    Descricao: string | null;
}

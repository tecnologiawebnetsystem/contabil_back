import { BaseEntity } from '../../../shared/base.entity';
export declare class Gruporamos extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    CodigoGrupoRamo: number | null;
    Descricao: string | null;
}

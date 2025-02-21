import { BaseEntity } from '../../../shared/base.entity';
export declare class Ramocontabil extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    CodigoRamo: number | null;
    CodigoRamoSusep: number | null;
    flgRamoAtivo: boolean | null;
}

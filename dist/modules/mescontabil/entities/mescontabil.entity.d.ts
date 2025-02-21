import { BaseEntity } from '../../../shared/base.entity';
export declare class Mescontabil extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    MesContabil: string | null;
    Ativo: boolean | null;
}

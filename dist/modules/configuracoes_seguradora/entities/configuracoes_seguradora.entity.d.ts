import { BaseEntity } from '../../../shared/base.entity';
export declare class Configuracoes_seguradora extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    cor_primaria: string | null;
    cor_segundaria: string | null;
}

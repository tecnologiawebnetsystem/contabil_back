import { BaseEntity } from '../../../shared/base.entity';
export declare class Modulocontabil extends BaseEntity {
    id: number;
    created_at: Date | null;
    Modulo: string | null;
    Descricao: string | null;
    seguradora_id: number | null;
    flgModuloAtivo: boolean | null;
}

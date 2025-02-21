import { BaseEntity } from '../../../shared/base.entity';
export declare class Tipopessoaseguro extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    Descricao: string | null;
}

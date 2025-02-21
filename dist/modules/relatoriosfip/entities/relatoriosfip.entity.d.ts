import { BaseEntity } from '../../../shared/base.entity';
export declare class Relatoriosfip extends BaseEntity {
    RelatorioID: number;
    CompanhiaID: number;
    PeriodoReferencia: Date;
    TipoQuadro: string;
    DataEnvio: Date | null;
    Status: string;
}

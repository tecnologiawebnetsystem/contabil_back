import { BaseEntity } from '../../../shared/base.entity';
export declare class Circulares extends BaseEntity {
    id: number;
    created_at: Date | null;
    seguradora_id: number | null;
    CodigoCircular: string | null;
    NomeCircular: string | null;
    NumeroAnexo: string | null;
    NomeQuadro: string | null;
    Ativo: boolean | null;
    DescricaoQuadro: string | null;
    Periodicidade: string | null;
    TipoArquivo: string | null;
}

import { BaseEntity } from '../../../shared/base.entity';
export declare class Lancamentoscontabeis extends BaseEntity {
    LancamentoID: number;
    CompanhiaID: number;
    DataLancamento: Date;
    Descricao: string;
    Valor: number;
    ContaDebitoID: number;
    ContaCreditoID: number;
    UsuarioID: number;
    DataCriacao: Date | null;
}

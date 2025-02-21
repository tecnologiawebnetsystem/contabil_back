
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { CircularesModule } from './modules/circulares/circulares.module';
import { CompanhiassegurosModule } from './modules/companhiasseguros/companhiasseguros.module';
import { ConfigcontabilModule } from './modules/configcontabil/configcontabil.module';
import { ConfigquadroscircularesModule } from './modules/configquadroscirculares/configquadroscirculares.module';
import { Configuracoes_seguradoraModule } from './modules/configuracoes_seguradora/configuracoes_seguradora.module';
import { ContaauxiliarModule } from './modules/contaauxiliar/contaauxiliar.module';
import { ContratosresseguroModule } from './modules/contratosresseguro/contratosresseguro.module';
import { CorrentistaModule } from './modules/correntista/correntista.module';
import { EventosModule } from './modules/eventos/eventos.module';
import { GruporamosModule } from './modules/gruporamos/gruporamos.module';
import { HistoricopadraoModule } from './modules/historicopadrao/historicopadrao.module';
import { LancamentoscontabeisModule } from './modules/lancamentoscontabeis/lancamentoscontabeis.module';
import { MescontabilModule } from './modules/mescontabil/mescontabil.module';
import { ModulocontabilModule } from './modules/modulocontabil/modulocontabil.module';
import { ObjetocontabilizacaoModule } from './modules/objetocontabilizacao/objetocontabilizacao.module';
import { PlanocontasModule } from './modules/planocontas/planocontas.module';
import { ProvisoestecnicasModule } from './modules/provisoestecnicas/provisoestecnicas.module';
import { RamocontabilModule } from './modules/ramocontabil/ramocontabil.module';
import { RelatoriosfipModule } from './modules/relatoriosfip/relatoriosfip.module';
import { SucursaisModule } from './modules/sucursais/sucursais.module';
import { TabuabiometricaModule } from './modules/tabuabiometrica/tabuabiometrica.module';
import { TbbalanceteModule } from './modules/tbbalancete/tbbalancete.module';
import { TipoapoliceModule } from './modules/tipoapolice/tipoapolice.module';
import { TipocontabilizacaoModule } from './modules/tipocontabilizacao/tipocontabilizacao.module';
import { TipocontratoModule } from './modules/tipocontrato/tipocontrato.module';
import { TipocontratoresseguroModule } from './modules/tipocontratoresseguro/tipocontratoresseguro.module';
import { TipomovimentocontabilModule } from './modules/tipomovimentocontabil/tipomovimentocontabil.module';
import { TipomovimentofipModule } from './modules/tipomovimentofip/tipomovimentofip.module';
import { TiponaturezacontabilizacaoModule } from './modules/tiponaturezacontabilizacao/tiponaturezacontabilizacao.module';
import { TipooperacaofipModule } from './modules/tipooperacaofip/tipooperacaofip.module';
import { TipooperacaosinistroModule } from './modules/tipooperacaosinistro/tipooperacaosinistro.module';
import { TipopagamentoModule } from './modules/tipopagamento/tipopagamento.module';
import { TipopessoaModule } from './modules/tipopessoa/tipopessoa.module';
import { TipopessoaseguroModule } from './modules/tipopessoaseguro/tipopessoaseguro.module';
import { TiporesseguroModule } from './modules/tiporesseguro/tiporesseguro.module';
import { TiposeguradoraModule } from './modules/tiposeguradora/tiposeguradora.module';
import { UserModule } from './modules/user/user.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configService.get('database'),
      inject: [ConfigService],
    }),
    CircularesModule,
    CompanhiassegurosModule,
    ConfigcontabilModule,
    ConfigquadroscircularesModule,
    Configuracoes_seguradoraModule,
    ContaauxiliarModule,
    ContratosresseguroModule,
    CorrentistaModule,
    EventosModule,
    GruporamosModule,
    HistoricopadraoModule,
    LancamentoscontabeisModule,
    MescontabilModule,
    ModulocontabilModule,
    ObjetocontabilizacaoModule,
    PlanocontasModule,
    ProvisoestecnicasModule,
    RamocontabilModule,
    RelatoriosfipModule,
    SucursaisModule,
    TabuabiometricaModule,
    TbbalanceteModule,
    TipoapoliceModule,
    TipocontabilizacaoModule,
    TipocontratoModule,
    TipocontratoresseguroModule,
    TipomovimentocontabilModule,
    TipomovimentofipModule,
    TiponaturezacontabilizacaoModule,
    TipooperacaofipModule,
    TipooperacaosinistroModule,
    TipopagamentoModule,
    TipopessoaModule,
    TipopessoaseguroModule,
    TiporesseguroModule,
    TiposeguradoraModule,
    UserModule,
    UsuariosModule,

  ],
})
export class AppModule {}

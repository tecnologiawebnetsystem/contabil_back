"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const database_config_1 = require("./config/database.config");
const circulares_module_1 = require("./modules/circulares/circulares.module");
const companhiasseguros_module_1 = require("./modules/companhiasseguros/companhiasseguros.module");
const configcontabil_module_1 = require("./modules/configcontabil/configcontabil.module");
const configquadroscirculares_module_1 = require("./modules/configquadroscirculares/configquadroscirculares.module");
const configuracoes_seguradora_module_1 = require("./modules/configuracoes_seguradora/configuracoes_seguradora.module");
const contaauxiliar_module_1 = require("./modules/contaauxiliar/contaauxiliar.module");
const contratosresseguro_module_1 = require("./modules/contratosresseguro/contratosresseguro.module");
const correntista_module_1 = require("./modules/correntista/correntista.module");
const eventos_module_1 = require("./modules/eventos/eventos.module");
const gruporamos_module_1 = require("./modules/gruporamos/gruporamos.module");
const historicopadrao_module_1 = require("./modules/historicopadrao/historicopadrao.module");
const lancamentoscontabeis_module_1 = require("./modules/lancamentoscontabeis/lancamentoscontabeis.module");
const mescontabil_module_1 = require("./modules/mescontabil/mescontabil.module");
const modulocontabil_module_1 = require("./modules/modulocontabil/modulocontabil.module");
const objetocontabilizacao_module_1 = require("./modules/objetocontabilizacao/objetocontabilizacao.module");
const planocontas_module_1 = require("./modules/planocontas/planocontas.module");
const provisoestecnicas_module_1 = require("./modules/provisoestecnicas/provisoestecnicas.module");
const ramocontabil_module_1 = require("./modules/ramocontabil/ramocontabil.module");
const relatoriosfip_module_1 = require("./modules/relatoriosfip/relatoriosfip.module");
const sucursais_module_1 = require("./modules/sucursais/sucursais.module");
const tabuabiometrica_module_1 = require("./modules/tabuabiometrica/tabuabiometrica.module");
const tbbalancete_module_1 = require("./modules/tbbalancete/tbbalancete.module");
const tipoapolice_module_1 = require("./modules/tipoapolice/tipoapolice.module");
const tipocontabilizacao_module_1 = require("./modules/tipocontabilizacao/tipocontabilizacao.module");
const tipocontrato_module_1 = require("./modules/tipocontrato/tipocontrato.module");
const tipocontratoresseguro_module_1 = require("./modules/tipocontratoresseguro/tipocontratoresseguro.module");
const tipomovimentocontabil_module_1 = require("./modules/tipomovimentocontabil/tipomovimentocontabil.module");
const tipomovimentofip_module_1 = require("./modules/tipomovimentofip/tipomovimentofip.module");
const tiponaturezacontabilizacao_module_1 = require("./modules/tiponaturezacontabilizacao/tiponaturezacontabilizacao.module");
const tipooperacaofip_module_1 = require("./modules/tipooperacaofip/tipooperacaofip.module");
const tipooperacaosinistro_module_1 = require("./modules/tipooperacaosinistro/tipooperacaosinistro.module");
const tipopagamento_module_1 = require("./modules/tipopagamento/tipopagamento.module");
const tipopessoa_module_1 = require("./modules/tipopessoa/tipopessoa.module");
const tipopessoaseguro_module_1 = require("./modules/tipopessoaseguro/tipopessoaseguro.module");
const tiporesseguro_module_1 = require("./modules/tiporesseguro/tiporesseguro.module");
const tiposeguradora_module_1 = require("./modules/tiposeguradora/tiposeguradora.module");
const user_module_1 = require("./modules/user/user.module");
const usuarios_module_1 = require("./modules/usuarios/usuarios.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [database_config_1.default],
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => configService.get('database'),
                inject: [config_1.ConfigService],
            }),
            circulares_module_1.CircularesModule,
            companhiasseguros_module_1.CompanhiassegurosModule,
            configcontabil_module_1.ConfigcontabilModule,
            configquadroscirculares_module_1.ConfigquadroscircularesModule,
            configuracoes_seguradora_module_1.Configuracoes_seguradoraModule,
            contaauxiliar_module_1.ContaauxiliarModule,
            contratosresseguro_module_1.ContratosresseguroModule,
            correntista_module_1.CorrentistaModule,
            eventos_module_1.EventosModule,
            gruporamos_module_1.GruporamosModule,
            historicopadrao_module_1.HistoricopadraoModule,
            lancamentoscontabeis_module_1.LancamentoscontabeisModule,
            mescontabil_module_1.MescontabilModule,
            modulocontabil_module_1.ModulocontabilModule,
            objetocontabilizacao_module_1.ObjetocontabilizacaoModule,
            planocontas_module_1.PlanocontasModule,
            provisoestecnicas_module_1.ProvisoestecnicasModule,
            ramocontabil_module_1.RamocontabilModule,
            relatoriosfip_module_1.RelatoriosfipModule,
            sucursais_module_1.SucursaisModule,
            tabuabiometrica_module_1.TabuabiometricaModule,
            tbbalancete_module_1.TbbalanceteModule,
            tipoapolice_module_1.TipoapoliceModule,
            tipocontabilizacao_module_1.TipocontabilizacaoModule,
            tipocontrato_module_1.TipocontratoModule,
            tipocontratoresseguro_module_1.TipocontratoresseguroModule,
            tipomovimentocontabil_module_1.TipomovimentocontabilModule,
            tipomovimentofip_module_1.TipomovimentofipModule,
            tiponaturezacontabilizacao_module_1.TiponaturezacontabilizacaoModule,
            tipooperacaofip_module_1.TipooperacaofipModule,
            tipooperacaosinistro_module_1.TipooperacaosinistroModule,
            tipopagamento_module_1.TipopagamentoModule,
            tipopessoa_module_1.TipopessoaModule,
            tipopessoaseguro_module_1.TipopessoaseguroModule,
            tiporesseguro_module_1.TiporesseguroModule,
            tiposeguradora_module_1.TiposeguradoraModule,
            user_module_1.UserModule,
            usuarios_module_1.UsuariosModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
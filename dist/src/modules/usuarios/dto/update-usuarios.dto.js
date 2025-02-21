"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUsuariosDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_usuarios_dto_1 = require("./create-usuarios.dto");
class UpdateUsuariosDto extends (0, swagger_1.PartialType)(create_usuarios_dto_1.CreateUsuariosDto) {
}
exports.UpdateUsuariosDto = UpdateUsuariosDto;
//# sourceMappingURL=update-usuarios.dto.js.map
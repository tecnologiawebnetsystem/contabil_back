"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEventosDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_eventos_dto_1 = require("./create-eventos.dto");
class UpdateEventosDto extends (0, swagger_1.PartialType)(create_eventos_dto_1.CreateEventosDto) {
}
exports.UpdateEventosDto = UpdateEventosDto;
//# sourceMappingURL=update-eventos.dto.js.map
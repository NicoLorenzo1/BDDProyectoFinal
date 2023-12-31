"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../db/config"));
const general_routes_1 = __importDefault(require("../routes/general.routes"));
class Server {
    constructor() {
        this.Path = {
            general: '/api/general'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.SERVER_PORT || 3307;
        this.middlewares();
        this.dbConnection();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield config_1.default.authenticate();
                console.log('Database online');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    middlewares() {
        const bodyParser = require('body-parser');
        const cors = require('cors');
        this.app.use(cors());
        this.app.use(express_1.default.json());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use(this.Path.general, general_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
exports.default = Server; // Exporta la clase Server como predeterminada
//# sourceMappingURL=server.js.map
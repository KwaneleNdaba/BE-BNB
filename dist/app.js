"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "App", {
    enumerable: true,
    get: function() {
        return App;
    }
});
require("reflect-metadata");
const _compression = _interop_require_default(require("compression"));
const _cookieparser = _interop_require_default(require("cookie-parser"));
const _cors = _interop_require_default(require("cors"));
const _express = _interop_require_default(require("express"));
const _helmet = _interop_require_default(require("helmet"));
const _hpp = _interop_require_default(require("hpp"));
const _morgan = _interop_require_default(require("morgan"));
const _swaggerjsdoc = _interop_require_default(require("swagger-jsdoc"));
const _swaggeruiexpress = _interop_require_default(require("swagger-ui-express"));
const _config = require("./config");
const _database = require("./database");
const _errormiddleware = require("./middlewares/error.middleware");
const _logger = require("./utils/logger");
const _mongoose = _interop_require_default(require("mongoose"));
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
_mongoose.default.set('strictQuery', false);
let App = class App {
    listen() {
        this.app.listen(this.port, ()=>{
            _logger.logger.info(`=================================`);
            _logger.logger.info(`======= ENV: ${this.env} =======`);
            _logger.logger.info(`🚀 App listening on the port ${this.port}`);
            _logger.logger.info(`=================================`);
        });
    }
    getServer() {
        return this.app;
    }
    async connectToDatabase() {
        await (0, _database.dbConnection)();
    }
    initializeMiddlewares() {
        this.app.use((0, _morgan.default)(_config.LOG_FORMAT, {
            stream: _logger.stream
        }));
        this.app.use((0, _cors.default)({
            origin: 'http://localhost:3001',
            credentials: true
        }));
        this.app.use((0, _hpp.default)());
        this.app.use((0, _helmet.default)());
        this.app.use((0, _compression.default)());
        this.app.use(_express.default.json());
        this.app.use(_express.default.urlencoded({
            extended: true
        }));
        this.app.use((0, _cookieparser.default)());
    }
    initializeRoutes(routes) {
        routes.forEach((route)=>{
            this.app.use('/', route.router);
        });
    }
    initializeSwagger() {
        const options = {
            swaggerDefinition: {
                info: {
                    title: 'REST API',
                    version: '1.0.0',
                    description: 'Example docs'
                }
            },
            apis: [
                './src/routes/*.route.ts',
                './swagger.yaml'
            ]
        };
        try {
            const specs = (0, _swaggerjsdoc.default)(options);
            this.app.use('/api-docs', _swaggeruiexpress.default.serve, _swaggeruiexpress.default.setup(specs));
            _logger.logger.info('Swagger initialized successfully');
        } catch (error) {
            _logger.logger.error('Error initializing Swagger:', error);
            throw new Error('Failed to initialize Swagger');
        }
    }
    initializeErrorHandling() {
        this.app.use(_errormiddleware.ErrorMiddleware);
    }
    constructor(routes){
        _define_property(this, "app", void 0);
        _define_property(this, "env", void 0);
        _define_property(this, "port", void 0);
        this.app = (0, _express.default)();
        this.env = _config.NODE_ENV || 'development';
        this.port = _config.PORT || 5000;
        this.connectToDatabase();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeSwagger();
        this.initializeErrorHandling();
    }
};

//# sourceMappingURL=app.js.map
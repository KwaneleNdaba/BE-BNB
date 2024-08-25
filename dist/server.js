"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = require("./app");
const _authroute = require("./routes/auth.route");
const _usersroute = require("./routes/users.route");
const _validateEnv = require("./utils/validateEnv");
const _categoryroute = require("./routes/category.route");
(0, _validateEnv.ValidateEnv)();
const app = new _app.App([
    new _usersroute.UserRoute(),
    new _authroute.AuthRoute(),
    new _categoryroute.CategoryRoute()
]);
app.listen();
process.on('uncaughtException', (error)=>{
    console.error('Uncaught Exception:', error);
});

//# sourceMappingURL=server.js.map
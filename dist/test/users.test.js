"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _bcrypt = _interop_require_default(require("bcrypt"));
const _mongoose = _interop_require_default(require("mongoose"));
const _supertest = _interop_require_default(require("supertest"));
const _app = require("../app");
const _usersroute = require("../routes/users.route");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
afterAll(async ()=>{
    await new Promise((resolve)=>setTimeout(()=>resolve(), 500));
});
describe('Testing Users', ()=>{
    describe('[GET] /users', ()=>{
        it('response fineAll Users', async ()=>{
            const usersRoute = new _usersroute.UserRoute();
            const users = usersRoute.usersController.userService.users;
            users.find = jest.fn().mockReturnValue([
                {
                    _id: 'qpwoeiruty',
                    email: 'a@email.com',
                    password: await _bcrypt.default.hash('q1w2e3r4!', 10)
                },
                {
                    _id: 'alskdjfhg',
                    email: 'b@email.com',
                    password: await _bcrypt.default.hash('a1s2d3f4!', 10)
                },
                {
                    _id: 'zmxncbv',
                    email: 'c@email.com',
                    password: await _bcrypt.default.hash('z1x2c3v4!', 10)
                }
            ]);
            _mongoose.default.connect = jest.fn();
            const app = new _app.App([
                usersRoute
            ]);
            return (0, _supertest.default)(app.getServer()).get(`${usersRoute.path}`).expect(200);
        });
    });
    describe('[GET] /users/:id', ()=>{
        it('response findOne User', async ()=>{
            const userId = 'qpwoeiruty';
            const usersRoute = new _usersroute.UserRoute();
            const users = usersRoute.usersController.userService.users;
            users.findOne = jest.fn().mockReturnValue({
                _id: 'qpwoeiruty',
                email: 'a@email.com',
                password: await _bcrypt.default.hash('q1w2e3r4!', 10)
            });
            _mongoose.default.connect = jest.fn();
            const app = new _app.App([
                usersRoute
            ]);
            return (0, _supertest.default)(app.getServer()).get(`${usersRoute.path}/${userId}`).expect(200);
        });
    });
    describe('[POST] /users', ()=>{
        it('response Create User', async ()=>{
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4'
            };
            const usersRoute = new _usersroute.UserRoute();
            const users = usersRoute.usersController.userService.users;
            users.findOne = jest.fn().mockReturnValue(null);
            users.create = jest.fn().mockReturnValue({
                _id: '60706478aad6c9ad19a31c84',
                email: userData.email,
                password: await _bcrypt.default.hash(userData.password, 10)
            });
            _mongoose.default.connect = jest.fn();
            const app = new _app.App([
                usersRoute
            ]);
            return (0, _supertest.default)(app.getServer()).post(`${usersRoute.path}`).send(userData).expect(201);
        });
    });
    describe('[PUT] /users/:id', ()=>{
        it('response Update User', async ()=>{
            const userId = '60706478aad6c9ad19a31c84';
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4'
            };
            const usersRoute = new _usersroute.UserRoute();
            const users = usersRoute.usersController.userService.users;
            if (userData.email) {
                users.findOne = jest.fn().mockReturnValue({
                    _id: userId,
                    email: userData.email,
                    password: await _bcrypt.default.hash(userData.password, 10)
                });
            }
            users.findByIdAndUpdate = jest.fn().mockReturnValue({
                _id: userId,
                email: userData.email,
                password: await _bcrypt.default.hash(userData.password, 10)
            });
            _mongoose.default.connect = jest.fn();
            const app = new _app.App([
                usersRoute
            ]);
            return (0, _supertest.default)(app.getServer()).put(`${usersRoute.path}/${userId}`).send(userData);
        });
    });
    describe('[DELETE] /users/:id', ()=>{
        it('response Delete User', async ()=>{
            const userId = '60706478aad6c9ad19a31c84';
            const usersRoute = new _usersroute.UserRoute();
            const users = usersRoute.usersController.userService.users;
            users.findByIdAndDelete = jest.fn().mockReturnValue({
                _id: '60706478aad6c9ad19a31c84',
                email: 'test@email.com',
                password: await _bcrypt.default.hash('q1w2e3r4!', 10)
            });
            _mongoose.default.connect = jest.fn();
            const app = new _app.App([
                usersRoute
            ]);
            return (0, _supertest.default)(app.getServer()).delete(`${usersRoute.path}/${userId}`).expect(200);
        });
    });
});

//# sourceMappingURL=users.test.js.map
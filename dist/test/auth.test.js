"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _bcrypt = /*#__PURE__*/ _interop_require_default(require("bcrypt"));
const _mongoose = /*#__PURE__*/ _interop_require_default(require("mongoose"));
const _supertest = /*#__PURE__*/ _interop_require_default(require("supertest"));
const _app = /*#__PURE__*/ _interop_require_default(require("../app"));
const _authroute = /*#__PURE__*/ _interop_require_default(require("../routes/auth.route"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
afterAll(async ()=>{
    await new Promise((resolve)=>setTimeout(()=>resolve(), 500));
});
describe('Testing Auth', ()=>{
    describe('[POST] /signup', ()=>{
        it('response should have the Create userData', async ()=>{
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4!'
            };
            const authRoute = new _authroute.default();
            const users = authRoute.authController.authService.users;
            users.findOne = jest.fn().mockReturnValue(null);
            users.create = jest.fn().mockReturnValue({
                _id: '60706478aad6c9ad19a31c84',
                email: userData.email,
                password: await _bcrypt.default.hash(userData.password, 10)
            });
            _mongoose.default.connect = jest.fn();
            const app = new _app.default([
                authRoute
            ]);
            return (0, _supertest.default)(app.getServer()).post(`${authRoute.path}signup`).send(userData);
        });
    });
    describe('[POST] /login', ()=>{
        it('response should have the Set-Cookie header with the Authorization token', async ()=>{
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4!'
            };
            const authRoute = new _authroute.default();
            const users = authRoute.authController.authService.users;
            users.findOne = jest.fn().mockReturnValue({
                _id: '60706478aad6c9ad19a31c84',
                email: userData.email,
                password: await _bcrypt.default.hash(userData.password, 10)
            });
            _mongoose.default.connect = jest.fn();
            const app = new _app.default([
                authRoute
            ]);
            return (0, _supertest.default)(app.getServer()).post(`${authRoute.path}login`).send(userData).expect('Set-Cookie', /^Authorization=.+/);
        });
    });
// describe('[POST] /logout', () => {
//   it('logout Set-Cookie Authorization=; Max-age=0', async () => {
//     const userData: User = {
//       _id: '60706478aad6c9ad19a31c84',
//       email: 'test@email.com',
//       password: await bcrypt.hash('q1w2e3r4!', 10),
//     };
//     const authRoute = new AuthRoute();
//     const users = authRoute.authController.authService.users;
//     users.findOne = jest.fn().mockReturnValue(userData);
//     (mongoose as any).connect = jest.fn();
//     const app = new App([authRoute]);
//     return request(app.getServer())
//       .post(`${authRoute.path}logout`)
//       .send(userData)
//       .set('Set-Cookie', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ')
//       .expect('Set-Cookie', /^Authorization=\; Max-age=0/);
//   });
// });
});

//# sourceMappingURL=auth.test.js.map
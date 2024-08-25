"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserService", {
    enumerable: true,
    get: function() {
        return UserService;
    }
});
const _bcrypt = require("bcrypt");
const _typedi = require("typedi");
const _HttpException = require("../exceptions/HttpException");
const _usersmodel = require("../models/users.model");
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let UserService = class UserService {
    async findAllUser() {
        const users = await _usersmodel.UserModel.find();
        return users;
    }
    async findUserById(userId) {
        const findUser = await _usersmodel.UserModel.findOne({
            _id: userId
        });
        if (!findUser) throw new _HttpException.HttpException(409, "User doesn't exist");
        return findUser;
    }
    async createUser(userData) {
        const findUser = await _usersmodel.UserModel.findOne({
            username: userData.username
        });
        if (findUser) throw new _HttpException.HttpException(409, `This username ${userData.username} already exists`);
        const hashedPassword = await (0, _bcrypt.hash)(userData.password, 10);
        const createUserData = await _usersmodel.UserModel.create(_object_spread_props(_object_spread({}, userData), {
            password: hashedPassword
        }));
        return createUserData;
    }
    async updateUser(userId, userData) {
        if (userData.username) {
            const findUser = await _usersmodel.UserModel.findOne({
                username: userData.username
            });
            if (findUser && findUser._id != userId) throw new _HttpException.HttpException(409, `This username ${userData.username} already exists`);
        }
        if (userData.password) {
            const hashedPassword = await (0, _bcrypt.hash)(userData.password, 10);
            userData = _object_spread_props(_object_spread({}, userData), {
                password: hashedPassword
            });
        }
        const updateUserById = await _usersmodel.UserModel.findByIdAndUpdate(userId, userData);
        if (!updateUserById) throw new _HttpException.HttpException(409, "User doesn't exist");
        return updateUserById;
    }
    async deleteUser(userId) {
        const deleteUserById = await _usersmodel.UserModel.findByIdAndDelete(userId);
        if (!deleteUserById) throw new _HttpException.HttpException(409, "User doesn't exist");
        return deleteUserById;
    }
};
UserService = _ts_decorate([
    (0, _typedi.Service)()
], UserService);

//# sourceMappingURL=users.service.js.map
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "userModel", {
    enumerable: true,
    get: function() {
        return userModel;
    }
});
const _mongoose = require("mongoose");
const userSchema = new _mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    emailVerified: {
        type: Date
    },
    image: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    accounts: [
        {
            type: _mongoose.Schema.Types.ObjectId,
            ref: 'Account'
        }
    ],
    sessions: [
        {
            type: _mongoose.Schema.Types.ObjectId,
            ref: 'Session'
        }
    ]
});
const userModel = (0, _mongoose.model)('User', userSchema);

//# sourceMappingURL=user.model.js.map
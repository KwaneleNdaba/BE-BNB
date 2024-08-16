"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "verificationTokenModel", {
    enumerable: true,
    get: function() {
        return verificationTokenModel;
    }
});
const _mongoose = require("mongoose");
const verificationTokenSchema = new _mongoose.Schema({
    identifier: {
        type: String
    },
    token: {
        type: String,
        unique: true
    },
    expires: {
        type: Date
    }
});
const verificationTokenModel = (0, _mongoose.model)('VerificationToken', verificationTokenSchema);

//# sourceMappingURL=verification.model.js.map
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "accountModel", {
    enumerable: true,
    get: function() {
        return accountModel;
    }
});
const _mongoose = require("mongoose");
const accountSchema = new _mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    providerAccountId: {
        type: String,
        required: true
    },
    refresh_token: {
        type: String
    },
    access_token: {
        type: String
    },
    expires_at: {
        type: Number
    },
    token_type: {
        type: String
    },
    scope: {
        type: String
    },
    id_token: {
        type: String
    },
    session_state: {
        type: String
    }
});
const accountModel = (0, _mongoose.model)('Account', accountSchema);

//# sourceMappingURL=account.model.js.map
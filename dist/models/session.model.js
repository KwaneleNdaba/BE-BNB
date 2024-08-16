"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "sessionModel", {
    enumerable: true,
    get: function() {
        return sessionModel;
    }
});
const _mongoose = require("mongoose");
const sessionSchema = new _mongoose.Schema({
    sessionToken: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: String,
        required: true
    },
    expires: {
        type: Date,
        required: true
    }
});
const sessionModel = (0, _mongoose.model)('Session', sessionSchema);

//# sourceMappingURL=session.model.js.map
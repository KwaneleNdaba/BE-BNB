"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dbConnection", {
    enumerable: true,
    get: function() {
        return dbConnection;
    }
});
const _mongoose = require("mongoose");
const _config = require("../config");
const dbConnection = async ()=>{
    const dbConfig = {
        url: `mongodb+srv://kwanele:LTSNsskk113@cluster0.npgw9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    };
    if (_config.NODE_ENV !== 'production') {
        (0, _mongoose.set)('debug', true);
    }
    await (0, _mongoose.connect)(dbConfig.url, dbConfig.options);
};

//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "orderModel", {
    enumerable: true,
    get: function() {
        return orderModel;
    }
});
const _mongoose = require("mongoose");
const orderSchema = new _mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    price: {
        type: _mongoose.Schema.Types.Decimal128,
        required: true
    },
    products: {
        type: [
            Object
        ]
    },
    status: {
        type: String,
        required: true
    },
    intent_id: {
        type: String,
        unique: true
    },
    userEmail: {
        type: String,
        required: true
    }
});
const orderModel = (0, _mongoose.model)('Order', orderSchema);

//# sourceMappingURL=order.model.js.map
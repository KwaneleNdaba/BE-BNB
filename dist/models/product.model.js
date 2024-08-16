"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "productModel", {
    enumerable: true,
    get: function() {
        return productModel;
    }
});
const _mongoose = require("mongoose");
const productSchema = new _mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    price: {
        type: _mongoose.Schema.Types.Decimal128,
        required: true
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    options: {
        type: [
            Object
        ]
    },
    catSlug: {
        type: String,
        required: true
    }
});
const productModel = (0, _mongoose.model)('Product', productSchema);

//# sourceMappingURL=product.model.js.map
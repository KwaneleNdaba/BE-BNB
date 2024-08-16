"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CategoryModel", {
    enumerable: true,
    get: function() {
        return CategoryModel;
    }
});
const _mongoose = require("mongoose");
const categorySchema = new _mongoose.Schema({
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
    color: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    }
});
const CategoryModel = (0, _mongoose.model)('Category', categorySchema);

//# sourceMappingURL=category.model.js.map
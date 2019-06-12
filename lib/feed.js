"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var smartnewsRss20_1 = require("./smartnewsRss20");
var SNFFeed = (function () {
    function SNFFeed(options) {
        var _this = this;
        this.items = [];
        this.categories = [];
        this.addItem = function (item) { return _this.items.push(item); };
        this.addCategory = function (category) { return _this.categories.push(category); };
        this.rss2 = function () { return smartnewsRss20_1.default(_this); };
        this.options = options;
    }
    return SNFFeed;
}());
exports.SNFFeed = SNFFeed;
//# sourceMappingURL=feed.js.map
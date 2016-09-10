"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var fish_1 = require("./fish");
var XWing = (function (_super) {
    __extends(XWing, _super);
    function XWing() {
        _super.call(this, 2);
        this.name = "X-Wing";
    }
    return XWing;
}(fish_1.Fish));
exports.XWing = XWing;
//# sourceMappingURL=xwing.js.map
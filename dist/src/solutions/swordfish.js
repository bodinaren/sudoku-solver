"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var fish_1 = require("./fish");
var Swordfish = (function (_super) {
    __extends(Swordfish, _super);
    function Swordfish() {
        _super.call(this, 3);
        this.name = "Swordfish";
    }
    return Swordfish;
}(fish_1.Fish));
exports.Swordfish = Swordfish;
//# sourceMappingURL=swordfish.js.map
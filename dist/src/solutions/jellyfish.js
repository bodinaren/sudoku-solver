"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var fish_1 = require("./fish");
var Jellyfish = (function (_super) {
    __extends(Jellyfish, _super);
    function Jellyfish() {
        _super.call(this, 4);
        this.name = "Jellyfish";
    }
    return Jellyfish;
}(fish_1.Fish));
exports.Jellyfish = Jellyfish;
//# sourceMappingURL=jellyfish.js.map
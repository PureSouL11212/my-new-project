"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BodyComponent = void 0;
var core_1 = require("@angular/core");
var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
        this.currentDate = new Date().toDateString();
        this.availableRooms = [10, 12, 15, 14, 11, 13, 16];
        this.room = "example room";
    }
    BodyComponent.prototype.proceed = function () {
        // Add your logic for the proceed action here
    };
    BodyComponent = __decorate([
        core_1.Component({
            selector: 'app-body',
            standalone: true,
            imports: [],
            templateUrl: './body.component.html',
            styleUrl: './body.component.css'
        })
    ], BodyComponent);
    return BodyComponent;
}());
exports.BodyComponent = BodyComponent;

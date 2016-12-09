"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require("ionic/ionic");
var look_1 = require("../look/look");
var looksimple_1 = require("../looksimple/looksimple");
var profilehairdresser_1 = require("../profilehairdresser/profilehairdresser");
var takepicture_1 = require("../takepicture/takepicture");
var client_1 = require("../data/client");
var TimelineHairDresser = (function () {
    function TimelineHairDresser(clients, nav, view) {
        this.nav = nav;
        this.view = view;
        this.clients = clients;
        this.looks = this.clients.all();
    }
    TimelineHairDresser.prototype.showLook = function () {
        this.nav.push(look_1.Look);
    };
    TimelineHairDresser.prototype.showLookSimple = function () {
        this.nav.push(looksimple_1.LookSimple);
    };
    TimelineHairDresser.prototype.showProfile = function () {
        this.nav.push(profilehairdresser_1.ProfileHairDresser);
    };
    TimelineHairDresser.prototype.takePicture = function () {
        this.nav.push(takepicture_1.TakePicture);
    };
    return TimelineHairDresser;
}());
TimelineHairDresser = __decorate([
    ionic_1.Page({
        templateUrl: 'app/timelinehairdresser/timelinehairdresser.html',
        providers: [client_1.Clients]
    }),
    __metadata("design:paramtypes", [client_1.Clients, typeof (_a = typeof ionic_1.NavController !== "undefined" && ionic_1.NavController) === "function" && _a || Object, typeof (_b = typeof ionic_1.ViewController !== "undefined" && ionic_1.ViewController) === "function" && _b || Object])
], TimelineHairDresser);
exports.TimelineHairDresser = TimelineHairDresser;
var _a, _b;

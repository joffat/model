"use strict";
exports.__esModule = true;
exports.GameInfoEventHandler = exports.PlayerToGameEventHandler = exports.GameToPlayerEventHandler = exports.MatchEndedEventHandler = exports.GameEndedEventHandler = exports.MatchReplayEventHandler = exports.MatchCreatedEventHandler = exports.CreateMatchEventHandler = void 0;
var CreateMatchEventHandler = (function () {
    function CreateMatchEventHandler(handler) {
        this.handler = handler;
    }
    return CreateMatchEventHandler;
}());
exports.CreateMatchEventHandler = CreateMatchEventHandler;
var MatchCreatedEventHandler = (function () {
    function MatchCreatedEventHandler(handler) {
        this.handler = handler;
    }
    return MatchCreatedEventHandler;
}());
exports.MatchCreatedEventHandler = MatchCreatedEventHandler;
var MatchReplayEventHandler = (function () {
    function MatchReplayEventHandler(handler) {
        this.handler = handler;
    }
    return MatchReplayEventHandler;
}());
exports.MatchReplayEventHandler = MatchReplayEventHandler;
var GameEndedEventHandler = (function () {
    function GameEndedEventHandler(handler) {
        this.handler = handler;
    }
    return GameEndedEventHandler;
}());
exports.GameEndedEventHandler = GameEndedEventHandler;
var MatchEndedEventHandler = (function () {
    function MatchEndedEventHandler(handler) {
        this.handler = handler;
    }
    return MatchEndedEventHandler;
}());
exports.MatchEndedEventHandler = MatchEndedEventHandler;
var GameToPlayerEventHandler = (function () {
    function GameToPlayerEventHandler(handler) {
        this.handler = handler;
    }
    return GameToPlayerEventHandler;
}());
exports.GameToPlayerEventHandler = GameToPlayerEventHandler;
var PlayerToGameEventHandler = (function () {
    function PlayerToGameEventHandler(handler) {
        this.handler = handler;
    }
    return PlayerToGameEventHandler;
}());
exports.PlayerToGameEventHandler = PlayerToGameEventHandler;
var GameInfoEventHandler = (function () {
    function GameInfoEventHandler(handler) {
        this.handler = handler;
    }
    return GameInfoEventHandler;
}());
exports.GameInfoEventHandler = GameInfoEventHandler;
//# sourceMappingURL=Handlers.js.map
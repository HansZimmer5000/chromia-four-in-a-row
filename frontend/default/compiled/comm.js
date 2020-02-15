"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
/* eslint @typescript-eslint/no-var-requires: warn */
var pcl = require('postchain-client');
// Check the node log on rellide-staging.chromia.dev to get node api url.
// const nodeApiUrl = 'https://rellide-staging.chromia.dev/node/XXXXX/'
// https://rellide-staging.chromia.dev/node/10125/brid/iid_0
var nodeApiUrl = 'https://rellide-staging.chromia.dev/node/10155/';
var blockchainRID = '813BD267A03222939B5363139B070344EEC1EF726CA2A9F0D26B3FC6410AAAB0';
var rest = pcl.restClient.createRestClient(nodeApiUrl, blockchainRID, 5);
var gtx = pcl.gtxClient.createClient(rest, Buffer.from(blockchainRID, 'hex'), []);
function keysBufferToString(b) {
    return b.toString('hex');
}
function keysStringToBuffer(s) {
    return Buffer.from(s, 'hex');
}
function doOperations(keys, addOps) {
    return __awaiter(this, void 0, void 0, function () {
        var tx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tx = gtx.newTransaction([keysStringToBuffer(keys.pubKey)]);
                    addOps(tx);
                    tx.sign(keysStringToBuffer(keys.privKey), keysStringToBuffer(keys.pubKey));
                    return [4 /*yield*/, tx.postAndWaitConfirmation()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function initGame(id) {
    return __awaiter(this, void 0, void 0, function () {
        var user, pubKey, privKey, keys;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = pcl.util.makeKeyPair();
                    pubKey = user.pubKey, privKey = user.privKey;
                    keys = {
                        pubKey: keysBufferToString(pubKey),
                        privKey: keysBufferToString(privKey)
                    };
                    return [4 /*yield*/, doOperations(keys, function (tx) {
                            tx.addOperation('init_game', id);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, keys];
            }
        });
    });
}
exports.initGame = initGame;
function setToken(id, col, keys) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, doOperations(keys, function (tx) {
                        tx.addOperation('set_token', id, col);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, keys];
            }
        });
    });
}
exports.setToken = setToken;
function getGame(id) {
    return __awaiter(this, void 0, void 0, function () {
        var raw;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, gtx.query('getGame', {
                        id: id
                    })
                    //const names = raw.map((o: any) => o.name)
                ];
                case 1:
                    raw = _a.sent();
                    //const names = raw.map((o: any) => o.name)
                    return [2 /*return*/, raw];
            }
        });
    });
}
exports.getGame = getGame;

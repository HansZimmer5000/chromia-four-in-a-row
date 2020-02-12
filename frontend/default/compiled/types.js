"use strict";
exports.__esModule = true;
var TableState;
(function (TableState) {
    TableState[TableState["WaitForPlayer"] = 0] = "WaitForPlayer";
    TableState[TableState["Running"] = 1] = "Running";
    TableState[TableState["Draw"] = 2] = "Draw";
    TableState[TableState["GameWon"] = 3] = "GameWon";
})(TableState = exports.TableState || (exports.TableState = {}));
var FieldState;
(function (FieldState) {
    FieldState[FieldState["Unset"] = 0] = "Unset";
    FieldState[FieldState["X"] = 1] = "X";
    FieldState[FieldState["O"] = 2] = "O";
})(FieldState = exports.FieldState || (exports.FieldState = {}));

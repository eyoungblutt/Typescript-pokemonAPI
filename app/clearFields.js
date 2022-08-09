define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.clearFields = void 0;
    let clearFields = () => {
        document.getElementById("pokemonCard").innerText = "";
        document.getElementById("errorMessage").innerText = "";
        localStorage.clear();
    };
    exports.clearFields = clearFields;
});

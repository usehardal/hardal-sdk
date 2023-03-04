"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMyLib = exports.sendToHardal = void 0;
function sendToHardal(data) {
    if (typeof window.hardal !== "undefined" && data) {
        window.hardal.trackEvent(data);
        console.log("".concat(data, " is sent!"));
    }
    else {
        console.warn("Hardal is not loaded"); // should be add the guide docs as link
    }
}
exports.sendToHardal = sendToHardal;
function loadMyLib() {
    if (typeof window.hardal !== "undefined") {
        var script = window === null || window === void 0 ? void 0 : window.document.createElement("script");
        script.src = "";
        script.setAttribute("data-website-id", "asdasd");
        script.async = true;
        script.defer = true;
        window === null || window === void 0 ? void 0 : window.document.head.appendChild(script);
    }
    else {
        console.warn("Hardal is not loaded"); // should be add the guide docs as link
    }
}
exports.loadMyLib = loadMyLib;

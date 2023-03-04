"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToHardal = void 0;
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
    var script = document.createElement("script");
    script.src = "https://mylib.com/tracker.js";
    script.setAttribute("data-website-id", "asdasd");
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}
// Call the function to load the script
loadMyLib();

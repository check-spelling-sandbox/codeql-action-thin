"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActionsLogger = getActionsLogger;
exports.getRunnerLogger = getRunnerLogger;
exports.withGroup = withGroup;
const core = __importStar(require("@actions/core"));
function getActionsLogger() {
    return core;
}
function getRunnerLogger(debugMode) {
    return {
        // eslint-disable-next-line no-console
        debug: debugMode ? console.debug : () => undefined,
        // eslint-disable-next-line no-console
        info: console.info,
        // eslint-disable-next-line no-console
        warning: console.warn,
        // eslint-disable-next-line no-console
        error: console.error,
        isDebug: () => debugMode,
        startGroup: () => undefined,
        endGroup: () => undefined,
    };
}
function withGroup(groupName, f) {
    core.startGroup(groupName);
    try {
        return f();
    }
    finally {
        core.endGroup();
    }
}
//# sourceMappingURL=logging.js.map
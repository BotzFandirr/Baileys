"use strict";

const chalk = require('chalk');
const boxen = require('boxen').default;
const os = require('os');
const { version } = require('../package.json');

// --- Fungsi untuk format memory (GB) ---
const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const gb = bytes / (1024 * 1024 * 1024);
    return `${gb.toFixed(2)} GB`;
};

// --- Mengambil Informasi Sistem ---
const cpus = os.cpus();
const totalMem = formatBytes(os.totalmem());
const freeMem = formatBytes(os.freemem());
const usedMem = formatBytes(os.totalmem() - os.freemem());
const uptime = (os.uptime() / 3600).toFixed(2); // Uptime dalam jam

console.clear()
// --- Membuat Konten Panel ---
const serverPanel = `
${chalk.hex('#FF69B4').bold('OWNER')}           : ${chalk.white('Fandirr store')}
${chalk.hex('#FF0000').bold('Baileys Mod V')}   : ${chalk.white(version)}

${chalk.gray('--------------------------------------------------')}

${chalk.hex('#89DDFF').bold('OS')}              : ${chalk.white(os.platform())} (${chalk.white(os.arch())})
${chalk.hex('#89DDFF').bold('Kernel Version')}  : ${chalk.white(os.release())}
${chalk.hex('#89DDFF').bold('Uptime')}          : ${chalk.white(uptime)} Hours

${chalk.gray('--------------------------------------------------')}

${chalk.hex('#32CD32').bold('CPU Model')}       : ${chalk.white(cpus[0].model)}
${chalk.hex('#32CD32').bold('Cores')}           : ${chalk.white(cpus.length)} Cores
${chalk.hex('#32CD32').bold('CPU Speed')}       : ${chalk.white(cpus[0].speed)} MHz

${chalk.gray('--------------------------------------------------')}

${chalk.hex('#FFD700').bold('Total Memory')}    : ${chalk.white(totalMem)}
${chalk.hex('#FFD700').bold('Used Memory')}     : ${chalk.white(usedMem)}
${chalk.hex('#FFD700').bold('Free Memory')}     : ${chalk.white(freeMem)}
`;

// --- Menampilkan Panel dengan Boxen ---
console.log(
    boxen(serverPanel, {
        title: 'SERVER SPECIFICATION',
        titleAlignment: 'center',
        padding: 1,
        margin: 1,
        borderStyle: 'double',
        borderColor: 'cyan',
        backgroundColor: '#111'
    })
);

/////// ( Jangan kesini )//////
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;

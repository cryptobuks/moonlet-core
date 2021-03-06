"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blockchain_1 = require("../../core/blockchain");
const networks = [
    {
        network_id: 0,
        name: "Main net",
        chainId: 1,
        blockchain: blockchain_1.Blockchain.ZILLIQA,
        mainNet: true,
        url: "https://api.zilliqa.com/",
        HDCoinValue: 10018,
    },
    {
        network_id: 1,
        name: "Test net",
        chainId: 2,
        blockchain: blockchain_1.Blockchain.ZILLIQA,
        mainNet: false,
        url: "https://api.testnet.zilliqa.com/",
        HDCoinValue: 1,
    },
    {
        network_id: 2,
        name: "Kaya - TestRPC",
        chainId: 2,
        blockchain: blockchain_1.Blockchain.ZILLIQA,
        mainNet: false,
        url: "http://127.0.0.1:4200/",
        HDCoinValue: 1,
    },
];
exports.default = networks;
//# sourceMappingURL=networks.js.map
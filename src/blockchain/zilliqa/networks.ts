import { Blockchain } from '../../core/blockchain';
import { Network } from '../../core/network';

const networks: Network[] = [
    {
        network_id: 0,
        name: "Main net",
        chainId: 1,
        blockchain: Blockchain.ZILLIQA,
        mainNet: true,
        url: "https://api.zilliqa.com/",
        HDCoinValue: 313,
    },
    {
        network_id: 1,
        name: "Test net",
        chainId: 333,
        blockchain: Blockchain.ZILLIQA,
        mainNet: false,
        url: "https://dev-api.zilliqa.com/",
        HDCoinValue: 1, // testnet
    },
    {
        network_id: 2,
        name: "Kaya - TestRPC",
        chainId: 2,
        blockchain: Blockchain.ZILLIQA,
        mainNet: false,
        url: "http://127.0.0.1:4200/",
        HDCoinValue: 1, // Test Net
    },
];

export default networks;

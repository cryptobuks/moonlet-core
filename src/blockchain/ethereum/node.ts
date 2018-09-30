import { GenericNode } from "../../core/node";
import { Network } from "../../core/network";
import networks from "./networks";
import BN from 'bn.js';
// const BN = require('bn.js');

export class EthereumNode extends GenericNode {

    public static readonly NETWORKS: Network[] = networks;

    constructor(network?: Network) {
        super();
        this.NETWORKS = networks;
        this.init(network);
    }

    public getBalance(caddress: string): Promise<BN> {
        return new Promise((resolve: any, reject: any) => {
            const result = this.call("eth_getBalance", [
                caddress,
                'latest',
            ]) as Promise<any>;

            return result.then((res) => {
                return resolve( new BN( res.data.result ) );
            }).catch((error) => {
                reject(error);
            });
        });
    }

    public getNonce(caddress: string): Promise<number> {

        return new Promise((resolve: any, reject: any) => {
            const result = this.call("eth_getTransactionCount", [
                caddress,
                'pending',
            ]) as Promise<any>;

            return result.then((res) => {
                const num = new BN( res.data.result );
                return resolve( num.toNumber() );
            }).catch((error) => {
                reject(error);
            });
        });
    }

    public send(rawTransaction: Buffer): Promise<string> {
        throw new Error("Method not implemented.");
    }

}

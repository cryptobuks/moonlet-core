import { IBlockchainConfig } from './blockchain-config';
import BigNumber from 'bignumber.js';

export class Amount {

    public static config: Map<string, {[unit: string]: number}> = new Map();

    /**
     * Add configuration
     * @param config
     */
    public static addConfig(config: IBlockchainConfig) {
        if (config && config.blockchain && config.units) {
            Amount.config.set(config.blockchain, config.units || {});
        }
    }

    public coin: string;
    private value: BigNumber;

    /**
     * Creates an instance of amount.
     * @param value
     * @param coin
     * @param [unit]
     */
    constructor(value: number | BigNumber, coin: string, unit?: string) {
        if (typeof value === 'number') {
            value = new BigNumber(value);
        }

        this.value = value;
        this.coin = coin;

        this.withUnit(unit, () => {
            this.value.multipliedBy(Math.pow(10, -Amount.config.get(coin)[unit]));
        });
    }

    public plus(amount: Amount): Amount {
        this.assertSameCoins(this.coin, amount.coin);
        return new Amount(this.value.plus(amount.toBigNumber()), this.coin);
    }

    public minus(amount: Amount): Amount {
        this.assertSameCoins(this.coin, amount.coin);
        return new Amount(this.value.minus(amount.toBigNumber()), this.coin);
    }

    public dividedBy(amount: Amount): Amount {
        this.assertSameCoins(this.coin, amount.coin);
        return new Amount(this.value.dividedBy(amount.toBigNumber()), this.coin);
    }

    public multipliedBy(amount: Amount): Amount {
        this.assertSameCoins(this.coin, amount.coin);
        return new Amount(this.value.multipliedBy(amount.toBigNumber()), this.coin);
    }

    public toBigNumber(unit?: string): BigNumber {
        let value: BigNumber;
        this.withUnit(unit, () => {
            value = this.value.multipliedBy(Math.pow(10, Amount.config.get(this.coin)[unit]));
        });

        return value || this.value;
    }

    public toNumber(unit?: string) {
        return this.toBigNumber(unit).toNumber();
    }

    public toString(unit?: string) {
        return this.toBigNumber(unit).toString();
    }

    private withUnit(unit, cb: any) {
        if (unit) {
            if (Amount.config.get(this.coin)[unit]) {
                return cb();
            } else {
                throw new Error(`${unit} is not a unit of ${this.coin}`);
            }
        }
    }

    private assertSameCoins(coin1, coin2) {
        if (coin1 !== coin2) {
            throw new Error('Cannot add two amounts with different coins');
        }
    }
}

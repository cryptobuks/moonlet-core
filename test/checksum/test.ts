import { assert } from "chai";
import mocha from "mocha";

import { checksummedStore } from './checksum.fixtures';
import { util  } from 'zilliqa-js';
const laksaUtil = require('laksa-core-crypto');

describe("Zilliqa address checksums", async () => {

    // once neeboo updates repo, enable this.
    /*
    it("should match 3rd party laksa-core-crypto implementation", async () => {
        for (let i = 0; i < checksummedStore.length; i++) {
            if (checksummedStore[i]) {
                const current = checksummedStore[i].good;
                const officialAddr = util.toChecksumAddress( current );
                const laksaAddr = laksaUtil.toChecksumAddress( current );
                assert.equal( officialAddr, laksaAddr, "Addresses do not match");

                assert.isTrue( laksaUtil.isValidChecksumAddress( officialAddr ), "Laksa isChecksumAddress check failed");
                assert.isTrue( util.isValidChecksumAddress( laksaAddr ), "Official isChecksumAddress check failed");
            }
        }
    });
    */
});

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe street repeat shift protect inner kiwi metal gather'; 
let testAccounts = [
"0xbc05721e4b1b1db34cf7efd50c05cb77f3eb966a24eeaeff8c48cd11f8cdb8f3",
"0xbe2b5781c62783d81375def3310b7a677c356c87419b0e446227dfbd62ce8bdf",
"0xc2ef26c8338c5537e836b5a2bf67ed536184251c39ca6e4bb58e169096fdb42b",
"0xdfe8063d22462493bf40a7c749136ec59e18b1b987a29f2cf73227150ee91758",
"0xdcdcfd192eb9adadbb3a4bffbf96ef16791c9b0f41d3ad22119b7030c75f1e39",
"0x4185269bf27aa147020997f4bd5bc24fe0577771ea1f1cebb3a388fc8e3ad2b3",
"0x31a7c795a3f4ad71f7b9d9723a1bcc06188f131739bee42da227386b31711325",
"0xf6045c07fbf7817b7a37a5912ee54987f89e7a5644f08cec0a4f0f9f3feec2b6",
"0x17e147f28d9e7715b76539bc34978f3ed8f520d96bd1720b33f1683cf3731c39",
"0x670044bc4a2e85c69a80c70332ae396e1e69840bbaf08c9e18b63ca5f9bfc0c3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn pupil inflict force fortune style'; 
let testAccounts = [
"0x6a79fff08f542eb7730438e2299845b9457e7176b434869c2139bc307f4c0245",
"0x677b909b43af9a865725cbadd1186f6f551e3b046c39c514f713e4fa5a0772f4",
"0x318645d8d892d04ec0a554dbc36ef1689076b6497fa69ea2f74c48058ee0d9df",
"0x96b9c3eec1f0f7f211e90e6cc65c58ccfda4e9a322b5d785633cdb9400ab0f13",
"0xd5d6e706701a414f6af523e1bd8b3adb41b64ff28531c1f2da77486ef02f5ae1",
"0x57f713910ac487e6ed67e26ba1787cc071ab3bd8e04147915f8c48310708c232",
"0xbcee3d476c8f6e51d07f85a803670848311643e55c7e2f6e69415d21b4a7aba5",
"0x27f39aab333c116c7fce63926c0ca5c7003db81520ee80d044f369eca4b46c8f",
"0xd9a82281721b749f69ca5f5f4b5b117b007f833c1d83eece8ac754943bf9798d",
"0x1b4d65e7d5ff8132dbbbcd1fe65554234c5ecd01960731fbca852d4944255019"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



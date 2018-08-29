const HDWalletProvider = require('truffle-hdwallet-provider')
const fs = require('fs')

const mnemonic = 'uncle dust alien radar deposit palace exile detect master nuclear uncover three'

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      gas: 4500000,
      gasPrice: 25000000000,
      network_id: '*'
    },
    kovan: {
      provider: new HDWalletProvider(mnemonic, 'https://kovan.infura.io'),
      network_id: '*',
      gas: 4500000,
      gasPrice: 25000000000
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/e16b591615714db29fa92ad1dc360106", 0)
      },
      network_id: 3
    },
    mainnet: {
      provider: new HDWalletProvider(mnemonic, 'https://mainnet.infura.io'),
      network_id: '*',
      gas: 4500000,
      gasPrice: 25000000000
    }
  }
}

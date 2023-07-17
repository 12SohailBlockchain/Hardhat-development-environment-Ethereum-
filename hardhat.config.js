

// This is code for the hardaht code for local blockchain hardhat
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 1337
    }
  },
  paths: {
    artifacts: './src/artifacts',
  },
  mocha: {
    timeout: 20000
  }
};
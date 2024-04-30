require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  networks: {
    base_sepolia: {
      url: "https://sepolia.base.org",
      accounts: {
        mnemonic: "fat egg captain virtual kiss element ramp nice year deer size slush"
      },
      verify: {
        etherscan: {
          apiUrl: "https://api-sepolia.basescan.org",
          apiKey: 'N6YSW5EUZ5ZN72VZJR6YZFT219723WC7WB'
        }
      }
    }
}
  
};

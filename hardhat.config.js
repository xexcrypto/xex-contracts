require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");
dotenv.config()
require("@nomiclabs/hardhat-etherscan");
const fs = require("fs");

task("setTreasure", "set treasure address")
    .addParam("contract", "contract to set the treasure")
    .addParam("wallet", "wallet to set as treasure")
    .setAction(async (taskArgs) => {
        const Main = await ethers.getContractFactory("Main")
        const main = Main.attach(taskArgs.contract);
        await main.setTreasure(taskArgs.wallet);
    });


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    networks: {
        canto_testnet: {
            url: `https://eth.plexnode.wtf/`,
            accounts: [`${process.env.PRIVATE_KEY}`],
            live: true,
            saveDeployments: true,
        },
        bsc_testnet: {
            url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
            accounts: [`${process.env.PRIVATE_KEY}`],
            live: true,
            saveDeployments: true,
        },
        avax_testnet: {
            url: `https://api.avax-test.network/ext/bc/C/rpc`,
            accounts: [`${process.env.PRIVATE_KEY}`],
            live: true,
            saveDeployments: true,
        },
        eth_testnet: {
            url: `https://goerli.infura.io/v3/${process.env.INFURA}`,
            accounts: [`${process.env.PRIVATE_KEY}`],
            live: true,
            saveDeployments: true,
        },
        polygon_testnet: {
            url: `https://rpc.ankr.com/polygon_mumbai`,
            accounts: [`${process.env.PRIVATE_KEY}`],
            live: true,
            saveDeployments: true,
        },
        hardhat: {
            blockGasLimit: 12_450_000,
            hardfork: "london"
        },
        localhost: {
            url: 'http://localhost:8545',
        },
    },
    etherscan: {
        apiKey: `${process.env.ETHERSCAN}`
    },
    solidity: {
        compilers: [
            {
                version: '0.8.4',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    },
                },
            }
        ],
    },
};
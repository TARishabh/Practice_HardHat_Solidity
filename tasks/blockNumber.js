const { task } = require("hardhat/config");

task("blockNumber","Print the number of blocks in a current chain").setAction(
    async (taskArgs, hre) =>{
        const blockNumber = await hre.ethers.provider.getBlockNumber();
        console.log(`Current Block Number is: ${blockNumber}`);
    }
);

module.exports = {}
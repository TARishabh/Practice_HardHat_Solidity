const { ethers,run, network } = require("hardhat");


async function main (){
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying Contract...")
  const SimpleStorage = await SimpleStorageFactory.deploy();
  const adddress = await SimpleStorage.getAddress();
  console.log(`Contract Deployed at ${adddress}`);

  if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY){
    await SimpleStorage.deploymentTransaction().wait(6);
    verify(adddress,[]);
  }

  const currentValue = await SimpleStorage.retrieve();
  console.log(`Current Value is ${currentValue}`);
  const transactionResponse = await SimpleStorage.store(7);
  await transactionResponse.wait(1);
  const updatedValue = await SimpleStorage.retrieve()
  console.log(`Updated Value is ${updatedValue}`);
};

async function verify(contractAddress,args){
  try {
    await run("verify:verify",{
      address: contractAddress,
      constructorArguments:args,
    })
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")){
      console.log("Already Verified");
    } 
    else {
      console.log(error);
    }
  }


}

main()
  .then(()=>process.exit(0))
  .catch((error)=>{
    console.log(error);
    process.exit(1);
  });






















// // We require the Hardhat Runtime Environment explicitly here. This is optional
// // but useful for running the script in a standalone fashion through `node <script>`.
// //
// // You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// // will compile your contracts, add the Hardhat Runtime Environment's members to the
// // global scope, and execute the script.
// const hre = require("hardhat");

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 60;

//   const lockedAmount = hre.ethers.parseEther("0.001");

//   const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   await lock.waitForDeployment();

//   console.log(
//     `Lock with ${ethers.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
//   );
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

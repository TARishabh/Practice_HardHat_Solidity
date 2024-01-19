Steps to setup a hardhat project:

https://hardhat.org/tutorial/creating-a-new-hardhat-project

yarn init -> to start a package.json
yarn add --dev hardhat -> to install hardhat
yarn hardhat -> to start hardhat project


hardhat.config.js is a like entry point for all the other files.

now you can do yarn hardhat to check all the operations you can do with hardhat CLI:

yarn hardhat node -> to give details (private key, address of all the dummy nodes)
yarn hardhat compile -> compiles the contract

Now let's create and deploy first contract using hardhat on etherscan, sepoliaEtherScan, and on hardhat's dummy node

1. Create a contract in contracts folder, for our project I will name it SimpleStorage.sol
2. After creating the contract compile it using yarn hardhat compile
3. Now Write a script to deploy this contract.
    now to write the script follow this pattern -> import, main function -> verify function -> deploy
    now for storing sensetive information, you must create a .env file and place sensetive info. there
    install a package dotenv using yarn add dotenv and import it in deploy.js
    now after writing the contract run it using:
    yarn hardhat run scripts/deploy.js --network NETWORK_NAME,
    (if you only write yarn hardhat run scripts/deploy.js it will be deployed to default Hardhat local network)
    you can add more networks in hardhat.config.js

    now to verify your contract, you can do this by installing package:
    https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify

4. Now you can also make your custom tasks in hardhat, using hardhat tasks tutorial:
    https://hardhat.org/hardhat-runner/docs/advanced/create-task
    create all the tasks in a single folder.
    after that import that task in hardhat.config.js.

5. You can also do yarn hardhat console --network to write programs directly into the console.
    now to write test, there are certains conventions such as:
    describe -> beforeEach -> it()

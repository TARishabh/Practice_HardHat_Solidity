// Types of anonymous function
// () =>{}

const { ethers } = require("hardhat");
const { assert } = require("chai");

// function(){}
describe("SimpleStorage", function (){
    let simpleStorageFactory, simpleStorage;
    beforeEach(async function(){
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await simpleStorageFactory.deploy();
    });

    it("Should retrieve the value",async function(){
        const expectedValue = "0";
        const actualValue = await simpleStorage.retrieve();
        assert.equal(actualValue.toString(), expectedValue);
    });

    it("Should update when we call store", async function(){
        const transactionResponse = await simpleStorage.store("7");
        await transactionResponse.wait(1);
        const currentValue = await simpleStorage.retrieve();
        assert.equal(currentValue.toString(), "7");
        
    });

    it("Should Store the struct into people's array",async function(){
        const expectedName = "Rishabh";
        const expectedFavNumber = "69";

        const transactionResponse = await simpleStorage.addPerson(expectedName,expectedFavNumber);
        await transactionResponse.wait(1)
        console.log(await simpleStorage.people.length, "hellllo")
        
    });
})
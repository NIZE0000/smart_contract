const SimpleToken = artifacts.require("SimpleToken");
const { expect } = require("chai");

contract("SimpleToken", (accounts) => {

    it("should have the correct initial supply", async () => {
      const simpleTokenInstance = await SimpleToken.deployed();
      const totalSupply = await simpleTokenInstance.totalSupply();
      const decimals = await simpleTokenInstance.decimals();
  
      // Calculate the expected initial supply based on decimals
      const initialSupply = 1000000 * (10 ** decimals.toNumber());
  
      // Assert that the initial supply matches the expected value
      expect(totalSupply.toNumber()).to.equal(initialSupply);
    });
  });
  
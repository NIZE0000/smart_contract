// SPDX-License-Identifier: MIT
const SimpleToken = artifacts.require("SimpleToken");

module.exports = function (deployer) {
  // You can specify the initial values for the token here
  const name = "MyToken";
  const symbol = "MTK";
  const decimals = 18;
  const initialSupply = 1000000;

  deployer.deploy(SimpleToken, name, symbol, decimals, initialSupply);
};

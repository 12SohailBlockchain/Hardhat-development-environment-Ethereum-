

// This is code for the hardhat node deploy.js //
//npx hardhat compile//
//npx hardhat run deploy.js --network localhost


async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Contract = await ethers.getContractFactory("Storage");
  const contract = await Contract.deploy();

  console.log("Contract address:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//for the mutiple smart contracts functions//

const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account: " + deployer.address);

  // Deploy First
  const First = await ethers.getContractFactory("FirstContract");
  const first = await First.deploy();

  // Deploy Second
  const Second = await ethers.getContractFactory("SecondContract");
  const second = await Second.deploy();


// Deploy Third
const Third = await ethers.getContractFactory("ThirdContract");
const third = await Third.deploy();


  

  console.log("Sohail: " + first.address);
  console.log("Ahmed: " + second.address);
  console.log("Laghari: " + third.address);
}

main()
  .then(() => process.exit())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

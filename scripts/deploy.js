const hre = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')


}

async function main() {
    const Upload = await hre.ethers.getContractFactory("Upload");
    const upload = await Upload.deploy();
    
    // Now, the contract address should be available
    console.log("Upload contract deployed with address:", upload.address);

    const [deployer] = await hre.ethers.getSigners();

    // Confirm deployer address
    console.log("Deployer address:", deployer.address);

    // Attempt to interact with the contract
    console.log("Calling upload_data function...");
    const trans = await upload.connect(deployer).upload_data(1, 1, 2, [1,2,3]);
    await trans.wait();

    console.log(`Done uploading`);
}

main().catch((error) => {
    console.error("Error:", error);
    process.exitCode = 1;
});

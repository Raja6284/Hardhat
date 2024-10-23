const hre = require("hardhat");
//console.log(hre)

async function main() {
    const currentTimestampInSecond = Math.round(Date.now() / 1000);
    const yearInSecond = 365 * 24 * 60 * 60;
    const unlockTime = currentTimestampInSecond + yearInSecond;

    // Use ethers directly from the imported object
    const lockedAmount = hre.ethers.parseEther("1")
    console.log(lockedAmount);

    const myTest = await hre.ethers.getContractFactory("myTest");
    const myTestInstance = await myTest.deploy(unlockTime,{value:lockedAmount})

    await myTestInstance.waitForDeployment();
    console.log(myTestInstance)
    //await myTestInstance.deployTransaction.wait()
    console.log(`Contract contain 1 ETH and address : ${myTestInstance.target}`)

    // console.log(currentTimestampInSecond);
    // console.log(yearInSecond);
    // console.log(unlockTime);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});

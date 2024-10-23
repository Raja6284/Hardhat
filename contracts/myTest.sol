// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//import the hardhat console
import "hardhat/console.sol";

contract myTest{

    uint256 public unlockedTime;
    address payable owner;

    event Withdrawl(uint256 amount, uint256 when);

    constructor(uint256 _unlockedTime) payable{
        require(block.timestamp < _unlockedTime,"unlocked time should be in future");

        unlockedTime = _unlockedTime;
        owner = payable(msg.sender);
    }

    function withdraw() public{
        require(unlockedTime <= block.timestamp,"Wait for the time to complete");
        require(msg.sender == owner,"you are not an owner");

        emit Withdrawl(address(this).balance,block.timestamp);
        owner.transfer(address(this).balance);
    }
}
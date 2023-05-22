pragma solidity ^0.8.0;

import "./Escrow.sol"; 

import "@circleci/circleci-api/src/types/CircleAPI.sol";

contract CircleAPI {

  CircleAPI public circleApi;

  constructor(string memory apiToken) {
    circleApi = new CircleAPI({ apiToken });
  }

  function getBalance() public view returns (BigNumber) {
    return circleApi.getBalance();
  }

  function deposit(BigNumber amount) public returns (Promise<void>) {
    return circleApi.deposit(amount);
  }

  function withdraw(BigNumber amount) public returns (Promise<void>) {
    return circleApi.withdraw(amount);
  }
}
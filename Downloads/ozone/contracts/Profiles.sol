//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

contract Profiles {
    struct Profile {
        string name;
        string email;
        string phoneNumber;
        address walletAddress;
    }

    mapping(address => Profile) public profiles;
    
    event ProfileRegistered(address indexed user, string name, string email, string phoneNumber);
    
    function registerProfile(string memory _name, string memory _email, string memory _phoneNumber) public {
        require(bytes(_name).length > 0, "Name is required");
        require(bytes(_email).length > 0, "Email is required");
        require(bytes(_phoneNumber).length > 0, "Phone number is required");
        
        Profile storage profile = profiles[msg.sender];
        require(profile.walletAddress == address(0), "Profile already exists");
        
        profile.name = _name;
        profile.email = _email;
        profile.phoneNumber = _phoneNumber;
        profile.walletAddress = msg.sender;
        
        emit ProfileRegistered(msg.sender, _name, _email, _phoneNumber);
    }
}

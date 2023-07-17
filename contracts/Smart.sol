pragma solidity ^0.8.0;

contract Storage {

    uint256 number;

    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function store(uint256 num) public {
        number = num;
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }
}



// import "hardhat/console.sol";

// contract Token {
//     //...

//     function transfer(address to, uint256 amount) external {
//         require(balances[msg.sender] >= amount, "Not enough tokens");

//         console.log(
//             "Transferring from %s to %s %s tokens",
//             msg.sender,
//             to,
//             amount
//         );

//         balances[msg.sender] -= amount;
//         balances[to] += amount;

//         emit Transfer(msg.sender, to, amount);
//     }
// }

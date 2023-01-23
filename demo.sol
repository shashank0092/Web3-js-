// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract demo{

    uint public value=10;

    function setValue(uint _value) public{
        value=_value;
    }
}
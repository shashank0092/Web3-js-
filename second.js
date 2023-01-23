let Web3=require("web3")
let web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

let contract=new web3.eth.Contract([
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "value",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
],"0x43237856e5771b756d8146a784E509cf45cD4D9F")

const getData=async()=>{
    let value1=await contract.methods.value().call();
    console.log(value1);
}
// getData()

const setData=async()=>{
    await contract.methods.setValue(90).send({
        from:'0xB2E4AFC79eDd49891da2274C1E4235E7228861Fa'
    })
}

setData()
getData()

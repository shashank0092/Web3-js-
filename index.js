let Web3=require("web3");
let web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

const getData=async()=>{
    let value1=await web3.eth.getBalance("0x776137D5a23B5EFa1a2a5638E7F7059931771D7D");

    let ethVal=await web3.utils.fromWei(value1,"ether");

    console.log(ethVal);
}

web3.eth.sendTransaction(
    {
        from:'0x776137D5a23B5EFa1a2a5638E7F7059931771D7D',
        to:"0xB2E4AFC79eDd49891da2274C1E4235E7228861Fa",
        value:web3.utils.toWei("5","ether")
    }
)

getData();


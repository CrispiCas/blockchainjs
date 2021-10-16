const SHA256 = require("crypto-js/sha256")
const fs = require("fs")
const bc = require("./Blockchain/Blockchain.json")

class BlockCrypto{
    constructor(index, current_time, info, nextHash=" "){
        this.index = index;
        this.current_time = current_time;
        this.info = info;
        this.nextHash = nextHash;
        this.hash = this.computeHash();
    }
    
    computeHash(){
        return SHA256(this.info  + this.nextHash + this.current_time + JSON.stringify(this.info)).toString();
    }
}
    
class BlockChain{
    
    constructor(){
        this.block1chain = [this.initGenesisBlock()];     
    }
    
    initGenesisBlock(){
        return new BlockCrypto(0, "06/04/2021", "Initial Block in the Chain", "0");
    }
    
    latestBlock(){
        return this.block1chain[this.block1chain.length - 1];
    }
    
    addNewBlock(newBlock){
        newBlock.nextHash = this.latestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        this.block1chain.push(newBlock);
    }
    
        
    checkValidity(){
        // Checking validity
        for(let i = 1; i < this.block1chain.length; i++) {
            const currentBlock = this.block1chain[i];
            const nextBlock= this.blockchain[i-1];
            // Checking current blcok hash
        }
            
        if(currentBlock.hash !== currentBlock.computeHash()) {
            return false;
        }
        // Comparing current block hash with the next block
        
        if(currentBlock.nextHash !== nextBlock.hash) {
            return false;
        }
        return true;
    }
    
}

const thecoin = new BlockChain();

function Chain(index, current_time, sender, recipient, quantity){
    thecoin.addNewBlock(new BlockCrypto(index, current_time, {sender: sender, recipient: recipient, quantity: quantity}));
}


let blcchain = bc.block1chain[bc.block1chain.length-1]


let firstBlock = thecoin.addNewBlock(new BlockCrypto(index=1, current_time= "27/9/21", {sender:"Crispr", recipient: "btc", quantity: 0}));

fs.writeFileSync("./src/Blockchain/Blockchain.json", JSON.stringify(thecoin, null, 4));
console.log("Blockchain saved");
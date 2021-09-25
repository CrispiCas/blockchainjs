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
    
//console.log(JSON.stringify(thecoin, null, 4));





function Chain(index, current_time, sender, recipient, quantity){
    thecoin.addNewBlock(new BlockCrypto(index, current_time, {sender: sender, recipient: recipient, quantity: quantity}));

    console.log(JSON.stringify(thecoin, null, 4))
}

Chain(1, "20/1/2121", "stonau", "Knuspiiii", 222212121212)
Chain(2, "20/20/2020", "Kurzername", "Ston", 122222222222222)
Chain(3, "20/10/2020", "testper", "test2per", 12345)


console.log(JSON.stringify(thecoin, null, 4))


let test2 = bc.block1chain[bc.block1chain.length-1]

console.log(test2.index)

Chain(test2.index +1, "25/9/2021", "test1per", "test2per", 12345)



fs.writeFileSync("./src/Blockchain/Blockchain.json", JSON.stringify(thecoin, null, 4));
console.log("Blockchain saved");

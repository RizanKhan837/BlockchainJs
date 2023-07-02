/* ---------- Ethereum Dev  ------------*/
/*======================================*/

// 1. Create a function that takes a hash and returns a color.

/* const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {

    for(let i=0; i< COLORS.length;i++){
        const aBytes = utf8ToBytes(COLORS[i]);

        const aHash = sha256(aBytes);

        if (toHex(hash) === toHex(aHash)){
            return COLORS[i];
        }
    }
} */

/* ------ Public Key Cryptography  ------*/
/*=======================================*/

// 2. Create a function that takes a message and returns a hash.
/* const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    const bytes = utf8ToBytes(message);
    // hash the message using keccak256
    const hash = keccak256(bytes);

    return hash;
    
}

module.exports = hashMessage; */

// 3. Create a function that takes a message and returns a signature.

/* const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require('./hashMessage');

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
    let messageHash = hashMessage(msg);
    return secp.sign(messageHash, PRIVATE_KEY, { recovered: true });
}

module.exports = signMessage; */

// 4. Create a function that takes a message, signature, and recovery bit and returns the public key.

/* const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    let hash = hashMessage(message);
    return secp.recoverPublicKey(hash, signature, recoveryBit);
}

module.exports = recoverKey; */

// 5. Create a function that takes a public key and returns the address.
/* const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
   let first = publicKey.slice(0,2);
   let hash = keccak256(publicKey.slice(1));

   return hash.slice(-20);
}

module.exports = getAddress; */

/* ------------ Mining  --------------*/
/*======================*/

// 6. Create a function that takes a block and returns the hash of the block.

/* const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  mempool.push(transaction);
}

function mine() {
  // TODO: mine a block
  const block = {
    id: 1,
  };

  block.id = blocks.length;
  let arr = [];
  for (let i = 0; i < mempool.length; i++) {
    if (block.transactions <= MAX_TRANSACTIONS) {
      block.transactions.push(mempool[i]);
      mempool.shift();
    }
  }

  block.transactions = arr;

  let stringify = JSON.stringify(block);
  block.hash = SHA256(stringify);
  blocks.push(block);
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
}; */


/* Inside the mine function, pull transactions off the mempool and include them in the block in an array called transactions
Remove each transaction you include in the block from the mempool
Add the transactions array to the block before hashing the block
 
Do not include more transactions in the block than the MAX_TRANSACTIONS limit. */

/* const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    // TODO: add transaction to mempool
    mempool.push(transaction)
}

function mine() {
    // TODO: mine a block
    const block = {
        id: 1,
        transactions: []
    };

    block.id = blocks.length;
    
    for (let i =0; i < mempool.length; i++){
        if(block.transactions.length <= MAX_TRANSACTIONS){
          block.transactions = mempool[i];
        }
        mempool.shift();
    }
    
    //block.transactions = arr;
    let stringify = JSON.stringify(block);
    block.hash = SHA256(stringify);
    blocks.push(block);
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
}; */


/* Now it's time to actually mine the block. This is where we get the work part of proof of work!

In the mine function, prior to hashing the block, add a nonce property. This property should start at 0
Keep changing the nonce until you find a hash that is less than the TARGET_DIFFICULTY */

/* const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;
const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    let transactions = [];
    while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
        transactions.push(mempool.pop());
    }
    const block = { id: blocks.length, transactions }
    block.nonce = 0;
    let hash;
    while (true) {
        hash = SHA256(JSON.stringify(block)).toString();
        if (BigInt(`0x${hash}`) < TARGET_DIFFICULTY) {
            break;
        }
        block.nonce++;
    }
    blocks.push({ ...block, hash });
}
*/


/* ---- BLOCKCHAIN DATA STRUCTURE  -----*/
/*================================*/

// 7. Create a function that takes a block and returns the hash of the block.

/* const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data){
        this.data = data;
    }

    toHash() {
        return SHA256(this.data  +  this.previousHash);
    }
} */


/* The Blockchain.js file contains the Blockchain class with a chain array. Let's add the Genesis Block to this array.
   Create a new Block in the Blockchain constructor then add it to the chain array.

   Let's create an addBlock function on our Blockchain class.
   This function should take in a new block and add it to the chain array:

   Add a previousHash property to each block. The value of this property should be the hash of the block before it in the chain.
   Use this previousHash property in the calculation of the block's hash. *\

/* const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block("Rizan Khan") ];
    }

    addBlock(block){
        block.previousHash = this.chain[this.chain.length - 1].toHash();
        this.chain.push(block);
    }

    isValid(){
        
        for(let i = this.chain.length-1; i>0; i--){
            if(this.chain[i].previousHash.toString()!== this.chain[i-1].toHash().toString()){
                return false;
            }
        }
        return true;
    }
} */



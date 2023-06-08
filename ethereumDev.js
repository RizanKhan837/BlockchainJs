// Etherum Development

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

        /* PUBLIC KEY CRYPTOGRAPHY */

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


    /* Mining */

// 6. Create a function that takes a block and returns the hash of the block.

/*  const SHA256 = require('crypto-js/sha256');
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
            id: 1
        };
    
        block.id = blocks.length;
        let arr = [];
        for (let i =0; i< mempool.length; i++){
            if(block.transactions <= MAX_TRANSACTIONS){
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
        mempool
    }; */


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
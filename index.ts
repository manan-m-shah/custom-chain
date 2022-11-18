'use strict';
import { Blockchain } from './blockchain';
import { Transaction } from './transaction';
import { myKey, myWalletAddress, user1Key, user1WalletAddress, user2Key, user2WalletAddress, user3Key, user3WalletAddress } from './userkeys';


const logBalances = () => {
    console.log();
    console.log(
        `Balance of myWallet is ${BITSChain.getBalanceOfAddress(myWalletAddress)}`
    );
    console.log();
    console.log(
        `Balance of user1Wallet is ${BITSChain.getBalanceOfAddress(user1WalletAddress)}`
    );
    console.log();
    console.log(
        `Balance of user2Wallet is ${BITSChain.getBalanceOfAddress(user2WalletAddress)}`
    );
    // console.log();
    // console.log(
    //     `Balance of user3Wallet is ${BITSChain.getBalanceOfAddress(user3WalletAddress)}`
    // );
}

// Create new instance of Blockchain class
const BITSChain = Blockchain();

logBalances();

// Mine first block
BITSChain.minePendingTransactions(myWalletAddress);

logBalances();

// Create a transaction & sign it with your key
const tx1 = Transaction(myWalletAddress, user1WalletAddress, 100);
tx1.signTransaction(myKey);
BITSChain.addTransaction(tx1);

// Mine block
BITSChain.minePendingTransactions(myWalletAddress);

logBalances();

// Create second transaction
const tx2 = Transaction(myWalletAddress, user2WalletAddress, 40);
tx2.signTransaction(myKey);
BITSChain.addTransaction(tx2);

// Mine block
BITSChain.minePendingTransactions(myWalletAddress);

logBalances();

// Check if the chain is valid
console.log();
console.log('Blockchain valid?', BITSChain.isChainValid() ? 'Yes' : 'No');

// console.log();
// console.log('Tampering with chain...');
// BITSChain.chain[1].transactions[0].amount = 10;
// Check if the chain is valid
// console.log('Blockchain valid?', BITSChain.isChainValid() ? 'Yes' : 'No');

// controller for WaitlistModel

import chainModel from "../models/chainModel";
import { getPublicKey, signNewTransaction } from '../keygenerator';
'use strict';
import { Blockchain, BlockchainType } from '../blockchain';
import { Transaction } from '../transaction';



// to get blockchain data
export const getBlockchain = (req, res) => {
    console.log("this is get blockchain");
}

export const createBlockchain = (req, res) => {
    console.log("this is create blockchain");
}

export const createNewChain = () => {
    const newChain = Blockchain();
    return newChain;
}


//blockchain: BlockchainType, fromAddressPrivateKey: string, toAddress: string, amount: number
export const createNewTransaction = (req, res) => {
    const fromAddressPrivateKey = req.body.fromAddressPrivateKey;
    const toAddress = req.body.toAddress;
    const amount = req.body.amount;
    const blockchain = req.body.blockchain;
    const fromAddress = getPublicKey(fromAddressPrivateKey);
    const newTransaction = Transaction(fromAddress, toAddress, amount);
    signNewTransaction(fromAddressPrivateKey, newTransaction);
    // blockchain.addTransaction(newTransaction);
    blockchain.minePendingTransactions(fromAddress);
    console.log(blockchain)
    return newTransaction;
}


//blockchain: BlockchainType, miningRewardAddress: string
export const minePendingTransactions = (req, res) => {
    const blockchain = req.body.blockchain;
    const miningRewardAddress = req.body.miningRewardAddress;
    blockchain.minePendingTransactions(miningRewardAddress);
}
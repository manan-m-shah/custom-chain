// mongoose model for Waitlist
// the Waitlist model has the following fields:
// - email: string
// - createdAt: Date
// - claimed: boolean
// - nft-id: string

import mongoose from 'mongoose';
import { Blockchain, BlockchainType } from '../blockchain';
// import {  BlockchainType } from './blockchain';

const Schema = mongoose.Schema;

// const WaitlistSchema = new Schema({
//   email: { type: String, required: true, unique: true, immutable: true },
//   createdAt: { type: Date, default: Date.now },
//   address: { type: String, default: null },
// });

const BlockchainSchema = new Schema({
    blockchain: {
        type: Blockchain,
    }
})

export default mongoose.model('Blockchain', BlockchainSchema);

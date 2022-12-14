// mongoose model for Waitlist
// the Waitlist model has the following fields:
// - email: string
// - createdAt: Date
// - claimed: boolean
// - nft-id: string

import mongoose from 'mongoose';
import {  BlockchainType } from './blockchain';

const Schema = mongoose.Schema;

// const WaitlistSchema = new Schema({
//   email: { type: String, required: true, unique: true, immutable: true },
//   createdAt: { type: Date, default: Date.now },
//   address: { type: String, default: null },
// });
 
const Blockchain = new Schema({
  fblockchain : { type: BlockchinType}
})

export default mongoose.model('Waitlist', WaitlistSchema);

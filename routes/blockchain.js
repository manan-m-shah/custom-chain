// routes for the waitlist
import express from 'express';
const router = express.Router();

import { getBlockchain, createBlockchain } from '../controllers/blockchain.js';

// send token by query
router.get('/', getBlockchain);

router.post('/addBlock', createBlockchain);



export default router;

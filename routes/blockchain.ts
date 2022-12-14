// routes for the waitlist
import express from 'express';
import { createBlockchain, getBlockchain } from '../controller/blockchain.js';
const router = express.Router();

// import { getBlockchain, createBlockchain } from '../controllers/blockchain';

// send token by query
router.get('/', getBlockchain);

router.post('/addBlock', createBlockchain);



export default router;

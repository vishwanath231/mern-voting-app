import express from 'express';
const router = express.Router();
import { voteRegister, voteDetails } from '../controller/VoteController.js';


router
.route('/newVote')
.post(voteRegister)


router
.route('/voteDetails')
.get(voteDetails)

export default router;
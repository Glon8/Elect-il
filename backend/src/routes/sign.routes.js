import express from 'express'

import { signIn, provideId, provideConfirm, signUp } from '../controllers/sign.js'

const signRouter = express.Router();

signRouter.post('/in', signIn);
signRouter.post('/id', provideId);
signRouter.post('/conf', provideConfirm);
signRouter.post('/up', signUp);

export default signRouter;
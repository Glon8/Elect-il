import express from 'express'

import { signIn } from '../controllers/signs.js'

const signRouter = express.Router();

signRouter.post('/sign-in', signIn);

export default signRouter;
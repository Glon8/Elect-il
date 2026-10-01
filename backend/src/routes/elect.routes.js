import express from 'express'

import { getElect, getDates, vote } from '../controllers/elections.js'

const electRouter = express.Router();

electRouter.get('/getElect', getElect);

electRouter.get('/getDates', getDates);

electRouter.post('/vote', vote);

export default electRouter;
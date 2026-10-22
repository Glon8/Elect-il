import express from 'express'

import { getHistory, getVoting } from '../controllers/history.js'

const historyRouter = express.Router();

historyRouter.get('/getHistory', getHistory);
historyRouter.get('/getVoting', getVoting);

export default historyRouter;
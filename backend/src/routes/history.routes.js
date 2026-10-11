import express from 'express'

import { getHistory } from '../controllers/history.js'

const historyRouter = express.Router();

historyRouter.get('/getHistory', getHistory);

export default historyRouter;
import express from 'express'
import cors from 'cors'

import utilRouter from './src/routes/utility.routes.js'
import electRouter from './src/routes/elect.routes.js'
import signRouter from './src/routes//sign.routes.js'

const app = express();
const port = process.env.PORT || 5000;

app.use(
    cors({
        origin: [
            'http://localhost:5000',
        ],
        credentials: true,
    })
);

app.use(express.json());

app.use('/api', utilRouter);
app.use('/api/vote', electRouter);
app.use('/api', signRouter);

app.listen(port, () => {
    if (port === 5000) console.log(`Server started at http://localhost:${port}`);
    else console.log(`Server is online!`);
});
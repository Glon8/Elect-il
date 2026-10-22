import express from 'express'
import cors from 'cors'

import utilRouter from './src/routes/utility.routes.js'
import historyRouter from './src/routes/history.routes.js'
import signRouter from './src/routes/sign.routes.js'

const app = express();
const port = process.env.PORT || 5000;

app.use(
    cors({
        origin: [
            import.meta.env.LOCAL_FRONTEND_API_URL,
        ],
        credentials: true,
    })
);

app.use(express.json());

app.use('/api', utilRouter);
app.use('/api/history', historyRouter);
app.use('/api/sign', signRouter);

app.listen(port, () => {
    if (port === 5000) console.log(`Server started at http://localhost:${port}`);
    else console.log(`Server is online!`);
});
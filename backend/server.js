import express from 'express'
import cors from 'cors'

const app = express();
const port = process.env.PORT || 5000;

app.use(
    cors({
        origin: [
            'http://localhost:5000',
        ],
        credentials: true
    })
);

app.use(express.json());



app.listen(port, () => {
    if (port === 5000) console.log(`Server started at http://localhost:${port}`);
    else console.log(`Server is online!`);
});
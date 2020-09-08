import express, { response } from 'express';
import cors from 'cors';
import routes from './routes';
console.log('Online!');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen();
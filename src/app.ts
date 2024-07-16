import express, { Request, Response, Router } from 'express'
import router from './router';
import cors from 'cors'
import globalErrorHandler from './middleware/globalErrorHandler';
import notFound from './middleware/notFound';
import bodyParser from 'body-parser';

const app = express();



app.use(express.json());
app.use(bodyParser.json());
// app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/', router);


app.use(globalErrorHandler)
app.use(notFound)

export default app
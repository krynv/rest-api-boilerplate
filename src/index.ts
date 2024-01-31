import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const PORT = process.env.PORT || 1337;

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());

app.use(cors({
  credentials: true,
}));

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}/`);
});

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.on('error', (error: Error) => {
  console.error(error);
});

app.use('/', router());
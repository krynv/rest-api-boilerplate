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

const PORT = process.env.API_PORT || 1337;

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
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/', router());
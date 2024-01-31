import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());

app.use(cors({
  credentials: true,
}));

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});
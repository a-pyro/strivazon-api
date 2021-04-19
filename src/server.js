import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT} 🏃‍♂️`));

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import productsRoutes from './routes/products.js';
import reviewsRoutes from './routes/reviews.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

app.use('/products', productsRoutes);
app.use('/reviews', reviewsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT} 🏃‍♂️`));

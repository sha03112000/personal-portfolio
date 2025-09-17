import express from 'express'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import cors from 'cors'
import route from './routes/route'

dotenv.config()

const app = express()

const PORT = process.env.PORT as string

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.get('/', (req, res)=> {
    res.send('application is running successfully')
})

app.use('/api', route)


const startServer = async () => {

  app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
  });
};

startServer();
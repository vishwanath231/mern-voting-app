import path from 'path';
import express from 'express';
import color from 'colors';
import cors from 'cors';
import dotenv from 'dotenv';
import studentRouter from './routes/studentRouter.js'
import nominationRouter from './routes/nominationRouter.js'
import adminRouter from './routes/adminRouter.js';
import voteRouter from './routes/voteRouter.js'
import connectDB from './database/db.js'

dotenv.config({ path: 'backend/config/config.env' })

// init app
const app = express();

connectDB();

// middleware
app.use(cors());
app.use(express.json());


app.use('/api/student', studentRouter)
app.use('/api/nomination', nominationRouter)
app.use('/api/admin', adminRouter)
app.use('/api/vote', voteRouter)


const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}



//port
const PORT = process.env.PORT || 5000;


//server listen
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.NODE_ENV}  mode port ${process.env.PORT}`.bgYellow.bold);
})
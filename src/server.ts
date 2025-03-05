import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from './router/auth.router';
import cookieParser from "cookie-parser"; // Import cookie-parser

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({ credentials: true}));
app.use(express.json());
app.use(cookieParser()); 
app.use('/api/v1', authRouter);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

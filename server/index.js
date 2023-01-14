import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import generalRoutes from "./routes/general.js"

/* DATA IMPORTS */
import Data from "./models/Data.js";
import { dataFacts } from './data/index.js';

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/general", generalRoutes)

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port ${PORT}`))
    /* ONLY ADD DATE ONCE*/
    // Data.insertMany(dataFacts);
}).catch((error) => console.log(`${error} did not connect`))
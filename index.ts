import dotenv from "dotenv";
import express from "express";
import "express-async-errors";

import router from "./Routers/index.js";
import errorHandler from "./Middlewares/errorHandler.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use(router);
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`));
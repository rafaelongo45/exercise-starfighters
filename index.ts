import dotenv from "dotenv";
import express from "express";

import router from "./Routers/index.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use(router);

app.listen(port, () => console.log(`Server running on port ${port}`));
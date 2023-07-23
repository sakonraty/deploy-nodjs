import express from "express";

import Controller from "./controllers/accountsController";
import { PORT } from "./constants";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/apis", Controller);

app.listen(PORT, () => {
  console.log(`Server running on => http://localhost:${PORT}`);
});

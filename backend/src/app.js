import express from "express";
import morgan from "morgan";

import sql from "../db/index.js";

const app = express();
const router = express.Router();

router.get("/example", async (req, res) => {
    const response = await sql("SELECT * FROM owners");

    return res.json(response);
})

app.use(express.json());
//middleware for logging
app.use(morgan(':date[iso] :method :url :status'));
app.use("/api", router);


app.listen(4000);

import express from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import { connect } from "./db/connect.js";

dotenv.config();
connect();

const app = express();
const PORT = process.env.PORT || 4000;


//Middlewares
app.use();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.get("/", async (req, res) => {
    res.send("Welcome to my API Backend");
}); 

//Error handler
app.use((err, req, res, next) => {
    res.status(500).send({error});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 


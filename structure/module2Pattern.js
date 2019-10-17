import express from "express";
import getName from "./module2PatternModule";

const PORT = 3000;

const app = express();
const myName = getName();

app.get("/", (req, res) =>
    res.send(`Hello ${myName}, you listen on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`My server is running on port ${PORT}`)
);
import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import App from "../App.js"


const app = express();

app.use(express.static('public'))

const PORT = process.env.PORT || 3001;
app.listen(PORT)

app.get('/', (req, res) => {
    const html = ReactDOMServer.renderToString(<App />);
    res.send(html);
  });



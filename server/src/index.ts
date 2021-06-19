require('dotenv').config();
import "reflect-metadata";
import express from 'express';
import { createConnection } from "typeorm";
import LoginController from "./controllers/LoginController";
import { verify } from "jsonwebtoken";
import cookieParser from 'cookie-parser';
// import ListController from "./controllers/ListController";

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.post('/api/registrar', async (req, res) => {
  res.send(LoginController.register(req));
});

app.post('/api/login', async (req, res) => {
  res.send(await LoginController.login(req, res));
});

app.post('/check', async (req, res) => {
  res.send(req.cookies.access);

  // let token = req.body.token;
  // try {
  //   verify(token, process.env.TOKEN_KEY)
  //   res.send('valido');
  // } catch {
  //   res.send("invalido");
  // }
});

// app.post('/api/lists/create', async (req, res) => {
//   res.send(await ListController.create(req));
// });

createConnection().then(() => {
  app.listen(3000, () => {
    console.log("Rodando na porta 3000");
  });
});

import 'dotenv/config';
import "reflect-metadata";
import express from 'express';
import { createConnection } from "typeorm";
import LoginController from "./controllers/LoginController";
import cookieParser from 'cookie-parser';
import { checkIfValidToken } from './auth';
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

app.post('/api/logout', async (req, res) => {
  res.send(await LoginController.logout(res));
});

app.post('/api/check_token', async (req, res) => {
  res.send(checkIfValidToken(req.cookies.access));
});

// app.post('/api/lists/create', async (req, res) => {
//   res.send(await ListController.create(req));
// });

createConnection().then(() => {
  app.listen(3000, () => {
    console.log("Rodando na porta 3000");
  });
});

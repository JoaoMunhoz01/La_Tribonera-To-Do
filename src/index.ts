import 'dotenv/config';
import "reflect-metadata";
import express from 'express';
import { createConnection } from "typeorm";
import LoginController from "./controllers/LoginController";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import UserController from './controllers/UserController';

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/registrar', async (req, res) => {
  res.send(await LoginController.register(req));
});

app.post('/api/login', async (req, res) => {
  res.send(await LoginController.login(req, res));
});

app.post('/api/logout', async (req, res) => {
  res.send(await LoginController.logout(res));
});

app.post('/api/auth', async (req, res) => {
  res.send(await LoginController.auth(req, res));
});

app.get('/api/username', (req, res) => {
  let name = UserController.getLoggedUserFirstName(req.cookies.access);
  res.send(name);
});

createConnection().then(() => {
  app.listen(8080, () => {
    console.log("Rodando na porta 8080");
  });
});

import 'dotenv/config';
import "reflect-metadata";
import express from 'express';
import { createConnection } from "typeorm";
import LoginController from "./controllers/LoginController";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import UserController from './controllers/UserController';
import { ListController } from './controllers/ListController';
import path from 'path';
import { TaskController } from './controllers/TaskController';

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../web/build')));

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

app.post('/api/listas/criar', async (req, res) => {
  res.send(await ListController.createList(req));
});

app.get('/api/listas', async (req, res) => {
  res.send(await ListController.getLists(req));
});

app.get('/api/listas/:id/tarefas', async (req, res) => {
  await ListController.getTasks(req, res);
});

app.delete('/api/listas/:id', async (req, res) => {
  res.send(await ListController.removeList(req));
});

app.put('/api/listas', async (req,res) => {
  res.send(await ListController.updateList(req));
});

app.post('/api/tarefa', async (req, res) => {
  await TaskController.create(req, res);
});

app.delete('/api/tarefa/:id', async (req, res) => {
  await TaskController.delete(req, res);
});

app.put('/api/tarefa', async (req, res) => {
  await TaskController.update(req, res);
});

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../web/build/index.html'));
});

createConnection().then(() => {
  app.listen(8080, () => {
    console.log("Rodando na porta 8080");
  });
});

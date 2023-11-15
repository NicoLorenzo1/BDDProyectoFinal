import * as dotenv from 'dotenv';
import Server from './models/server';
import login from './controllers/auth.controller';
import express from 'express';

dotenv.config();

const server = new Server();

server.listen();





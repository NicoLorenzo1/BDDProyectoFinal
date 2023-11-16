import * as dotenv from 'dotenv';
import Server from './models/server';
import express from 'express';

dotenv.config();

const server = new Server();

server.listen();





import express from "express";
import admin from "firebase-admin";
import credentials from "../key.json";
import { Routes } from "./app.routes";
import { spawn } from "child_process";
import io from "socket.io-client";
import fs from "fs";

const serviceAccount = credentials as admin.ServiceAccount;

export class AppServer {
    protected app: express.Application = express();

    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        const routes = new Routes();
        this.app.use("/api/v1/", routes.path());

        // const data = {
        //     name: "test",
        //     age: 20,
        // };
        const data = "Images/top_copper.png";
        const dataj = "Images/top_copper.jpeg";
        let data1;
        this.app.use('/python-test', (req, res) => {

            console.log(JSON.stringify(data));
            const process = spawn('python', ['src/trial.py', data, dataj]);
            process.stdout.on('data', (data) => {
                data1 = data.toString();
                // console.log(data1);
            });

            process.on('close', (code) => {
                console.log(`child process exited with code ${code}`);
                // const t = JSON.parse(data1);
                // console.log(t['name']);
                // res.send(data1);
            });
        });

        const socket = io('http://localhost:3000');

        socket.on('connection', () => {
            console.log('connected');
        });

        socket.on('123456789', (data) => {
            console.log(data);
            const result = JSON.parse(data);
            fs.writeFileSync("top_data.svg", result['top_svg']);
            fs.writeFileSync("bottom_data.svg", result['bottom_svg']);
            fs.writeFileSync("error.json", result['error_json']);
        });

        socket.emit('download1', "123456");

        this.app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
    }
}
new AppServer();

export const db = admin.firestore();

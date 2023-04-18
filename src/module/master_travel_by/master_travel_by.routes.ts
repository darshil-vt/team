import { Router } from "express";
import { TravelByController } from "./master_travel_by.controller";

export class TravelByRoutes {
    router = Router();
    private usrctrl: TravelByController = new TravelByController();

    constructor() {
        this.router.get('/', this.usrctrl.getAll);
    }
}
import { Router } from "express";
import { bodyValidator } from "../../middleware/validate.middleware";
import { MasterLocationController } from "./master_location.controller";
import { masterLocationSchema } from "./master_location.schema";

export class MasterLocationRoutes {
    router = Router();
    private usrctrl: MasterLocationController = new MasterLocationController();

    constructor() {
        this.router.get('/', this.usrctrl.getAll);

        this.router.post('/', [bodyValidator(masterLocationSchema)], this.usrctrl.createLocation);

        this.router.post('/update/:id', [bodyValidator(masterLocationSchema)], this.usrctrl.updateLocation);

        this.router.post('/delete/:id', this.usrctrl.deleteLocation);

        this.router.post('/test', this.usrctrl.test);
    }
}
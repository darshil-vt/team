import { Router } from "express";
import { TeamPurposeController } from "./master_team_purpose.controller";

export class TeamPurposeRoutes {
    router = Router();
    private usrctrl: TeamPurposeController = new TeamPurposeController();

    constructor() {
        this.router.get('/', this.usrctrl.getAll);
    }
}
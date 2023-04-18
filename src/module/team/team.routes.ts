import { Router } from "express";
import { bodyValidator } from "../../middleware/validate.middleware";
import { TeamController } from "./team.controller";
import { teamSchema } from "./team.schema";

export class TeamRoutes {
    router = Router();
    private usrctrl: TeamController = new TeamController();

    constructor() {
        this.router.get('/', this.usrctrl.getAll);

        this.router.post('/', [bodyValidator(teamSchema)], this.usrctrl.createTeam);

        this.router.post('/update/:id', [bodyValidator(teamSchema)], this.usrctrl.updateTeam);

        this.router.post('/delete/:id', this.usrctrl.deleteTeam);
    }
}
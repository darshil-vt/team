import { Router } from "express";
import { bodyValidator } from "../../middleware/validate.middleware";
import { MasterMembersController } from "./master_members.controller";
import { masterMembersSchema } from "./master_members.schema";

export class MasterMembersRoutes {
    router = Router();
    private usrctrl: MasterMembersController = new MasterMembersController();

    constructor() {
        this.router.get('/', this.usrctrl.getAll);

        this.router.post('/', [bodyValidator(masterMembersSchema)], this.usrctrl.createMember);

        this.router.post('/update/:id', [bodyValidator(masterMembersSchema)], this.usrctrl.updateMember);

        this.router.post('/delete/:id', this.usrctrl.deleteMember);
    }
}
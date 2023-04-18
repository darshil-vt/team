import { Router } from "express";
import { MemberPositionController } from "./master_member_position.controller";

export class MemberPositionRoutes {
    router = Router();
    private usrctrl: MemberPositionController = new MemberPositionController();

    constructor() {
        this.router.get('/', this.usrctrl.getAll);
    }
}
import { Router } from "express";
import { MemberDutyController } from "./master_member_duty.controller";

export class MemberDutyRoutes {
    router = Router();
    private usrctrl: MemberDutyController = new MemberDutyController();

    constructor() {
        this.router.get('/', this.usrctrl.getAll);
    }
}
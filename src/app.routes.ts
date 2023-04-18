import express from "express";
import { MasterLocationRoutes } from "./module/master_location/master_location.routes";
import { MasterMembersRoutes } from "./module/master_members/master_members.routes";
import { MemberDutyRoutes } from "./module/master_member_duty/master_member_duty.routes";
import { MemberPositionRoutes } from "./module/master_member_position/master_member_position.routes";
import { TeamPurposeRoutes } from "./module/master_team_purpose/master_team_purpose.routes";
import { TravelByRoutes } from "./module/master_travel_by/master_travel_by.routes";
import { TeamRoutes } from "./module/team/team.routes";

export class Routes {
    router = express.Router();

    path() {
        this.router.use('/team-purpose', new TeamPurposeRoutes().router);
        this.router.use('/travel-by', new TravelByRoutes().router);
        this.router.use('/member-duty', new MemberDutyRoutes().router);
        this.router.use('/member-position', new MemberPositionRoutes().router);
        this.router.use('/master-member', new MasterMembersRoutes().router);
        this.router.use('/master-location', new MasterLocationRoutes().router);
        this.router.use('/master-team', new TeamRoutes().router);
        return this.router;
    }
}
import { NextFunction, Request, Response } from "express";
import { db } from "../../app.server";
import { SuccessResponse } from "../../helpers/http";

export class MasterMembersController {
    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userRef = db.collection('MasterMembers');
            const response = await userRef.get();
            let responseArr = [];
            response.forEach((doc) => {
                responseArr.push({ id: doc.id, ...doc.data() });
            });
            return SuccessResponse(res, "Ok", responseArr);
        } catch (error) {
            next(error);
        }
    };

    public createMember = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = {
                name: req.body.name,
                position: req.body.position,
                pictureUrl: req.body.pictureUrl,
            };
            const response = await db.collection('MasterMembers').add(data);
            return SuccessResponse(res, "Ok", response);
        } catch (error) {
            next(error);
        }
    };

    public updateMember = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = {
                name: req.body.name,
                position: req.body.position,
                pictureUrl: req.body.pictureUrl,
            };
            const response = await db.collection('MasterMembers').doc(req.params.id).update(data);
            return SuccessResponse(res, "Ok", response);
        } catch (error) {
            next(error);
        }
    };

    public deleteMember = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await db.collection('MasterMembers').doc(req.params.id).delete();
            return SuccessResponse(res, "Ok", response);
        } catch (error) {
            next(error);
        }
    };
}
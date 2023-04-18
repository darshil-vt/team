import { NextFunction, Request, Response } from "express";
import { db } from "../../app.server";
import { SuccessResponse } from "../../helpers/http";

export class TeamController {
    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userRef = db.collection('TblTeam');
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

    public createTeam = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = {
                valid_from_date: req.body.valid_from_date,
                valid_upto_date: req.body.valid_upto_date,
                create_date: req.body.create_date,
                purpose: req.body.purpose,
                status: req.body.status,
            };
            const response = await db.collection('TblTeam').add(data);
            return SuccessResponse(res, "Ok", response);
        } catch (error) {
            next(error);
        }
    };

    public updateTeam = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = {
                valid_from_date: req.body.valid_from_date,
                valid_upto_date: req.body.valid_upto_date,
                create_date: req.body.create_date,
                purpose: req.body.purpose,
                status: req.body.status,
            };
            const response = await db.collection('TblTeam').doc(req.params.id).update(data);
            return SuccessResponse(res, "Ok", response);
        } catch (error) {
            next(error);
        }
    };

    public deleteTeam = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await db.collection('TblTeam').doc(req.params.id).delete();
            return SuccessResponse(res, "Ok", response);
        } catch (error) {
            next(error);
        }
    };
}
import { NextFunction, Request, Response } from "express";
import { db } from "../../app.server";
import { SuccessResponse } from "../../helpers/http";

export class TravelByController {
    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userRef = db.collection('MasterTravelBy');
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
}
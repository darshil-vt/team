import { NextFunction, Request, Response } from "express";
import { db } from "../../app.server";
import { SuccessResponse } from "../../helpers/http";
import { FileService } from "../../file.service";

export class MasterLocationController {

    public fileService = new FileService();

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userRef = db.collection('MasterLocation');
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

    public createLocation = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = {
                name: req.body.name,
                category: req.body.category,
                parent_location: req.body.parent_location,
                is_base_station: req.body.is_base_station,
            };
            const response = await db.collection('MasterLocation').add(data);
            return SuccessResponse(res, "Ok", response);
        } catch (error) {
            next(error);
        }
    };

    public updateLocation = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = {
                name: req.body.name,
                category: req.body.category,
                parent_location: req.body.parent_location,
                is_base_station: req.body.is_base_station,
            };
            const response = await db.collection('MasterLocation').doc(req.params.id).update(data);
            return SuccessResponse(res, "Ok", response);
        } catch (error) {
            next(error);
        }
    };

    public deleteLocation = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await db.collection('MasterLocation').doc(req.params.id).delete();
            return SuccessResponse(res, "Ok", response);
        } catch (error) {
            next(error);
        }
    };

    public test = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = this.fileService.addition(2, 3);
            console.log(data);
        } catch (error) {
            console.log(error);
            next(error);
        }
    };
}
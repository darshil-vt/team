import { Request, Response, NextFunction } from "express";
import { UnprocessableResponse } from "../helpers/http";

export const bodyValidator = (schema: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.validate(req.body);
        if (result.error) {
            return UnprocessableResponse(res, result.error.details[0].message, result.error);
        } else {
            next();
        }
    };
};
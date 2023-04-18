import { Joi } from "celebrate";
import joiDate from "@joi/date";
const joi = Joi.extend(joiDate) as typeof Joi;

export const teamSchema = Joi.object({
    valid_from_date: joi.date().format('DD-MM-YYYY').messages({ 'date.format': 'Date format is DD-MM-YYYY' }).required(),
    valid_upto_date: joi.date().format('DD-MM-YYYY').messages({ 'date.format': 'Date format is DD-MM-YYYY' }).required(),
    create_date: joi.date().format('DD-MM-YYYY').messages({ 'date.format': 'Date format is DD-MM-YYYY' }).required(),
    purpose: Joi.string().required(),
    status: Joi.boolean().required(),
});
import { Joi } from 'celebrate';

export const masterLocationSchema = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
    parent_location: Joi.string().required(),
    is_base_station: Joi.boolean().required(),
});
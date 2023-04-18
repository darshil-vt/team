import { Joi } from 'celebrate';

export const masterMembersSchema = Joi.object({
    name: Joi.string().required(),
    position: Joi.string().required(),
    pictureUrl: Joi.string().required(),
});
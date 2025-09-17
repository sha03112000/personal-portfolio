import Joi from "joi";

export const enquirySchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
        .email({ tlds: { allow: false } }) // validate email format without restricting TLDs
        .pattern(/@(email\.com|gmail\.com|outlook\.com|yahoo\.com|apple\.com)$/)
        .required()
        .messages({
            "string.pattern.base": "Email domain must be one of: email.com, gmail.com, outlook.com, yahoo.com, apple.com",
        }),
    message: Joi.string().required(),
});
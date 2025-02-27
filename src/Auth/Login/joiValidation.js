import Joi from "joi";

export const validation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 1, tlds: { allow: ["com"] } }).required().messages({
      "string.email": "Invalid email format",
      "any.required": "Email is required",
    }),
  
    password: Joi.string()
      .min(6)
      // .regex(/[a-zA-Z]/)
      // .regex(/[0-9]/)
      .required(),
  });

  const result = schema.validate(data, { abortEarly: false });
  if (!result.error) return null;

  const validationErrors = {};
  console.log(validationErrors);
  
  for (let item of result.error.details) {
    validationErrors[item.path[0]] = item.message;
  }
  return validationErrors;
};

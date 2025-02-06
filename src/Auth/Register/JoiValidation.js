import Joi from "joi";

export const validation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 1, tlds: { allow: ["com"] } }).required().messages({
      "string.email": "Invalid email format",
      "any.required": "Email is required",
    }),
    companyName: Joi.string().min(3).max(15).required().messages({
      "string.min": "Company Name should be at least 3 characters",
      "string.max": "Company Name should not exceed 15 characters",
      "any.required": "Company Name is required",
    }),
    role: Joi.string().required().messages({
      "any.required": "role is required",
    }),
    managerName: Joi.string().min(3).max(10).required().messages({
      "string.min": "ManagerName should be at least 3 characters",
      "string.max": "Manager Name should not exceed 10 characters",
      "any.required": "Manager Name is required",
    }),
    ordersRange: Joi.string().required().messages({
      "any.required": "Orders Range is required",
    }),
    website: Joi.string()
      .uri({ scheme: ["http", "https"] })
      .messages({
        "string.uri": "Website must be a valid URL",
      }),
    password: Joi.string()
      .min(6)
      .regex(/[a-zA-Z]/)
      .regex(/[0-9]/)
      .required(),
    repeat_password: Joi.any().valid(Joi.ref("password")).required().messages({
      "any.required": "repeat_password must be match password",
    }),
    logo: Joi.any(),
    phone: Joi.string().pattern(/^\+?\d{10,15}$/).messages({
      "string.pattern.base": "Phone number must be between 10 and 15 digits",
    }).required().messages({
      "any.required": "Phone number is required",
    }), phoneCode: Joi.string().min(1).max(5).required(),
    deliveryMethod: Joi.array().items(
      Joi.string().valid("MYSELF", "MAPIT_SHIP")
    ).min(1) 
    .max(2)
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

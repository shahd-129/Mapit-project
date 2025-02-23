import Joi from "joi";

export const validation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(15).required().messages({
      "string.min": "Name should be at least 3 characters",
      "string.max": "Name should not exceed 15 characters",
      'string.required': "Name is Required"
    }),

    phone: Joi.string().pattern(/^\+?\d{10,15}$/).required().messages({
      "string.pattern.base": "Phone number must be between 10 and 15 digits",
      'string.required': "Phone is Required"
    }),

    address: Joi.object({
      state: Joi.string().min(2).max(30).required().messages({
        "string.min": "State should be at least 2 characters",
        "string.max": "State should not exceed 20 characters",
        'string.required': "State is Required"
      }),

      city: Joi.string().min(2).max(20).required().messages({
        "string.min": "City should be at least 2 characters",
        "string.max": "City should not exceed 20 characters",
        'string.required': "City is Required"
      }),

      area: Joi.string().min(2).max(20).required().messages({
        "string.min": "District should be at least 2 characters",
        "string.max": "District should not exceed 20 characters",
         'string.required': "District is Required"
      }),

      street: Joi.string().min(2).max(30).required().messages({
        "string.min": "Street should be at least 2 characters",
        "string.max": "Street should not exceed 30 characters",
        'string.required': "Street is Required"
      }),

      buildingNumber: Joi.string().min(2).max(20).required().messages({
        "string.min": "Building number should be at least 2 characters",
        'string.required': "District is Required",
       
      }),

      details: Joi.string().min(5).max(100).required().messages({
        "string.min": "Details should be at least 5 characters",
        "string.max": "Details should not exceed 100 characters",
         'string.required': "Details is Required"
      }),

      location: Joi.object({
        coordinates: Joi.array()
          .length(2)
          .items(Joi.number().required())
          .messages({
            "array.length": "Coordinates must have exactly 2 values (latitude, longitude)",
          }),
      }).messages({
        "any.required": "Location is required",
      }),
    }).optional().messages({
      "any.required": "Address is required",
    }), 
  });

  const result = schema.validate(data, { abortEarly: false });
  if (!result.error) return null;

  const validationErrors = {};
  for (let item of result.error.details) {
    const fieldName = item.path.includes("address")
      ? item.path.slice(1).join(".")
      : item.path.join(".");
    validationErrors[fieldName] = item.message;
  }

  return validationErrors;
};

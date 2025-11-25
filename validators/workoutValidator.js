const Joi = require('joi');

exports.validateWorkout = (data) => {
  const schema = Joi.object({
    user: Joi.string().required(),
    date: Joi.date(),
    type: Joi.string().required(),
    duration: Joi.number().min(0),
    notes: Joi.string().allow('')
  });
  return schema.validate(data);
};

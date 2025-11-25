const Joi = require('joi');

exports.validateExercise = (data) => {
  const schema = Joi.object({
    workout: Joi.string().required(),
    name: Joi.string().required(),
    sets: Joi.number().min(1),
    reps: Joi.number().min(1),
    weight: Joi.number().min(0)
  });
  return schema.validate(data);
};

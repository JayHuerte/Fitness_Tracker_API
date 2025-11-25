const Joi = require('joi');

exports.validateGoal = (data) => {
  const schema = Joi.object({
    user: Joi.string().required(),
    title: Joi.string().required(),
    targetDate: Joi.date(),
    completed: Joi.boolean()
  });
  return schema.validate(data);
};

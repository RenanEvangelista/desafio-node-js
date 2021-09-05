import Joi from 'joi';
import Validator from './contracts/validator';

import adaptJoiError from './adapters/adaptJoiError';

export class SignUpValidator implements Validator {
  validate(request: any): void {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      telephones: Joi.array().items({
        number: Joi.number().integer().min(10000000).max(999999999).required(),
        area_code: Joi.number().integer().max(99).min(10).required(),
      }),
    });

    const result = schema.validate(request);
    const { error } = result;

    adaptJoiError(error);
  }
}

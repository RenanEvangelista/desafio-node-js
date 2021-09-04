import Joi from 'joi';
import Validator from './contracts/validator';
import {
  MissingParamError,
  InvalidParamError,
  InvalidParamTypeError,
} from '@/errors';

export class SignUpValidator implements Validator {
  validate(request: any): void {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      telephones: Joi.array().items({
        number: Joi.number().required(),
        area_code: Joi.number().required(),
      }),
    });

    const result = schema.validate(request);
    const { error } = result;

    if (!error) {
      return;
    }

    const err = error.details[0];

    switch (err.type) {
      case 'string.email':
        throw new InvalidParamError(err.context?.label || '');
      case 'any.required':
        throw new MissingParamError(err.context?.label || '');
      case 'string.base':
        throw new InvalidParamTypeError(err.context?.label || '', 'string');
      case 'number.base':
        throw new InvalidParamTypeError(err.context?.label || '', 'number');
      default:
    }
  }
}

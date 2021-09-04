import Joi from 'joi';
import {
  InvalidParamError,
  MissingParamError,
  InvalidParamTypeError,
} from '@/errors';

const adaptJoiError = (err: Joi.ValidationError | undefined) => {
  if (!err) {
    return;
  }

  const error = err.details[0];

  switch (error.type) {
    case 'string.email':
      throw new InvalidParamError(error.context?.label || '');
    case 'any.required':
      throw new MissingParamError(error.context?.label || '');
    case 'string.base':
      throw new InvalidParamTypeError(error.context?.label || '', 'string');
    case 'number.base':
      throw new InvalidParamTypeError(error.context?.label || '', 'number');
    default:
  }
};

export default adaptJoiError;

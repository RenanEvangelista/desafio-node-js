import {
  errorSchema,
  loginParams,
  userCreated,
  userShow,
  userTelephone,
  createAccountParams,
  securitySchemes,
} from './schemas/';

export default {
  loginParams,
  userCreated,
  error: errorSchema,
  userShow,
  userTelephone,
  createAccountParams,
  securitySchemes,
};

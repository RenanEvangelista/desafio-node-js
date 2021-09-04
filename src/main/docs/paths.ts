import { signInPath, signUpPath, showUserPath } from './paths/';

export default {
  '/users': signUpPath,
  '/sessions': signInPath,
  '/user': showUserPath,
};

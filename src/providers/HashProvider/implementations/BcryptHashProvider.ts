import { hash, compare } from 'bcrypt';

import IHashProvider from '../IHashProvider';

class BcryptHashProvider implements IHashProvider {
  async generate(payload: string): Promise<string> {
    const compared = await hash(payload, 8);
    return compared;
  }

  async compare(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export default BcryptHashProvider;

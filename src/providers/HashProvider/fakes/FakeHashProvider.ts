import IHashProvider from '../IHashProvider';

class FakeHashProvider implements IHashProvider {
  private fake = 'fakeHash';

  async generate(payload: string): Promise<string> {
    return `${payload}${this.fake}`;
  }

  async compare(payload: string, hash: string): Promise<boolean> {
    return `${payload}${this.fake}` === hash;
  }
}

export default FakeHashProvider;

import { Peanut } from './peanut';

describe('Peanut', () => {
  it('should pass', () => {
    const peanut = new Peanut();
    expect(typeof peanut).toBe('object');
    expect(peanut).toBeInstanceOf(Peanut);
    expect(peanut.name).toBe('This is a Peanut');
  });
  it('should not pass', () => {
    const peanut = new Peanut();
    expect(peanut.name).toBe('This is a peanut butter');
  });
});

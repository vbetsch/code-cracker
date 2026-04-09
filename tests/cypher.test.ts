import { Cypher } from '@src/cypher';

describe('Cypher', () => {
  it('should be OK', () => {
    const cypher: Cypher = new Cypher();
    expect(cypher).toBeDefined();
    expect(cypher).toBeInstanceOf(Cypher);
  });
  it('should decrypt hello', () => {
    const cypher: Cypher = new Cypher();
    expect(cypher.decrypt('&£aad')).toBe('hello');
  });
  it('should decrypt world', () => {
    const cypher: Cypher = new Cypher();
    expect(cypher.decrypt('ldga(')).toBe('world');
  });
});

import {Cypher} from '@src/cypher';

describe('Cypher', () => {
  it('should be OK', () => {
    const cypher: Cypher = new Cypher();
    expect(cypher).toBeDefined();
    expect(cypher).toBeInstanceOf(Cypher);
  });
  it('should decrypt h', () => {
    const cypher: Cypher = new Cypher();
    expect(cypher.decrypt('&')).toBe('h');
  });
  it('should decrypt he', () => {
    const cypher: Cypher = new Cypher();
    expect(cypher.decrypt('&£')).toBe('he');
  });
  it('should decrypt hello', () => {
    const cypher: Cypher = new Cypher();
    expect(cypher.decrypt('&£aad')).toBe('hello');
  });
  it('should decrypt world', () => {
    const cypher: Cypher = new Cypher();
    expect(cypher.decrypt('ldga(')).toBe('world');
  });
  it('should encrypt h', () => {
    const cypher: Cypher = new Cypher();
    expect(cypher.encrypt('h')).toBe('&');
  });
  it('should encrypt he', () => {
    const cypher: Cypher = new Cypher();
    expect(cypher.encrypt('he')).toBe('&£');
  });
  it('should encrypt hello', () => {
    const cypher: Cypher = new Cypher();
    expect(cypher.encrypt('hello')).toBe('&£aad');
  });
  it('should encrypt world', () => {
    const cypher: Cypher = new Cypher();
    expect(cypher.encrypt('world')).toBe('ldga(');
  });
  it('should handle cases', () => {
    const cypher: Cypher = new Cypher();
    expect(cypher.encrypt('Hello')).toBe('&£aad');
  });
});

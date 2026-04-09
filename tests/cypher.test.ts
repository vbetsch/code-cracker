describe('Cypher', () => {
  it('should be OK', () => {
    const cypher: Cypher = new Cypher();
    expect(cypher).toBeDefined();
    expect(cypher).toBeInstanceOf(Cypher);
  });
});

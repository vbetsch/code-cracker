export class Cypher {
  private readonly _alphabet: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  private readonly _decryptionKey: string[] = [
    '!',
    ')',
    '"',
    '(',
    '£',
    '*',
    '%',
    '&',
    '>',
    '<',
    '@',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
  ];

  public decrypt(message: string): string {
    let result: string = '';
    for (let i = 0; i < message.length; i++) {
      const char: string = message.charAt(i);
      const index: number = this._decryptionKey.indexOf(char);
      result += this._alphabet[index];
    }
    return result;
  }
}

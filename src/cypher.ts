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

  private _translate(dictSource: string[], dictTarget: string[], message: string): string {
    let result: string = '';
    for (let i = 0; i < message.length; i++) {
      const char: string = message.charAt(i);
      const index: number = dictSource.indexOf(char);
      if (!dictTarget[index]) continue;
      result += dictTarget[index];
    }
    return result;
  }

  public decrypt(message: string): string {
    return this._translate(this._decryptionKey, this._alphabet, message);
  }

  public encrypt(message: string): string {
    return this._translate(this._alphabet, this._decryptionKey, message.toLowerCase());
  }
}

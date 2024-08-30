function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

class LemonsUtils {
    getInfo() {
      return {
        id: 'lemonUtils',
        name: `Lemon's Utilities`,
        color1: '#ffc816',
        color2: '#e69100',
        blocks: [
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Text',
          },
          {
            opcode: 'type',
            blockType: Scratch.BlockType.REPORTER,
            text: 'type of [string]',
            arguments: {
                string: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Hello World!'
                }
            }
          },
          {
            opcode: 'slice',
            blockType: Scratch.BlockType.REPORTER,
            text: 'slice [text] from [first] to [last]',
            arguments: {
                text: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Hello World!'
                },
                first: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '0'
                },
                last: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '5'
                }
            }
          },
          {
            opcode: 'cv',
            blockType: Scratch.BlockType.REPORTER,
            text: 'count vowels in [string]',
            arguments: {
              string: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello World!'
              }
            }
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Others'
          },
          {
            opcode: 'maybeC',
            blockType: Scratch.BlockType.CONDITIONAL,
            text: 'maybe'
          },
          {
            opcode: 'maybeB',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'maybe'
          },
          {
            opcode: 'tb',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[d] to boolean',
            arguments: {
              d: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Lemon'
              }
            }
          },
          {
            opcode: 'huge',
            blockType: Scratch.BlockType.REPORTER,
            text: 'infinity',
          },
          {
            opcode: 'meow',
            blockType: Scratch.BlockType.REPORTER,
            text: 'meow [t] times',
            arguments: {
              t: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 5
              }
            }
          },
          {
            opcode: 'terminal',
            blockType: Scratch.BlockType.COMMAND,
            isTerminal: true,
            text: 'terminal block'
          }
        ]
      };
    }
  
    type(args) {
      return typeof(args.string);
    }
    slice(args) {
      const text = Scratch.Cast.toString(args.text);
      const start = Scratch.Cast.toNumber(args.first);
      const end = Scratch.Cast.toNumber(args.last);
      return text.slice(start, end)
    }
    maybeC() {
      return Math.random() >= 0.5;
    }
    maybeB() {
      return Math.random() >= 0.5;
    }
    cv(args) {
      const text = args.string;
      return countVowels(Scratch.Cast.toString(text))
    }
    tb(args) {
      const s = args.d;
      return Scratch.Cast.toBoolean(s);
    }
    huge() {
      return Infinity;
    }
    meow(args) {
      const meowArray = ["meow", "nya", "mrow"]
      let returnItem = ""
      for(let i = 0; i < Scratch.Cast.toNumber(args.t); i++) {
        const randomitem = meowArray[Math.floor(Math.random() * meowArray.length)];
        returnItem += randomitem;
        returnItem += " ";
      }
      return returnItem.trimEnd() + "~";
    }
    terminal() {
      return true;
    }
  }
  
  Scratch.extensions.register(new LemonsUtils());
export function decimalToBinary(num: number): string {
  if (num === 0) return '0';
  return num.toString(2);
}

export function decimalToOctal(num: number): string {
  if (num === 0) return '0';
  return num.toString(8);
}

export function decimalToHex(num: number): string {
  if (num === 0) return '0';
  return num.toString(16).toUpperCase();
}

export function binaryToDecimal(binary: string): number {
  return parseInt(binary, 2);
}

export function octalToDecimal(octal: string): number {
  return parseInt(octal, 8);
}

export function hexToDecimal(hex: string): number {
  return parseInt(hex, 16);
}

export function binaryToGrey(binary: string): string {
  const decimal = binaryToDecimal(binary);
  const grey = decimal ^ (decimal >> 1);
  return grey.toString(2).padStart(binary.length, '0');
}

export function greyToBinary(grey: string): string {
  let binary = grey[0];
  for (let i = 1; i < grey.length; i++) {
    binary += (parseInt(binary[i - 1]) ^ parseInt(grey[i])).toString();
  }
  return binary;
}

export function decimalToIEEE754Single(num: number): { binary: string; explanation: string[] } {
  const buffer = new ArrayBuffer(4);
  const view = new DataView(buffer);
  view.setFloat32(0, num, false);
  const bits = view.getUint32(0, false).toString(2).padStart(32, '0');

  const sign = bits[0];
  const exponent = bits.slice(1, 9);
  const mantissa = bits.slice(9);

  const explanation = [
    `Sign bit: ${sign} (${sign === '0' ? 'Positive' : 'Negative'})`,
    `Exponent (8 bits): ${exponent} (${parseInt(exponent, 2)} - 127 = ${parseInt(exponent, 2) - 127})`,
    `Mantissa (23 bits): ${mantissa}`,
    `Full representation: ${sign} ${exponent} ${mantissa}`
  ];

  return { binary: bits, explanation };
}

export function decimalToIEEE754Double(num: number): { binary: string; explanation: string[] } {
  const buffer = new ArrayBuffer(8);
  const view = new DataView(buffer);
  view.setFloat64(0, num, false);

  const high = view.getUint32(0, false).toString(2).padStart(32, '0');
  const low = view.getUint32(4, false).toString(2).padStart(32, '0');
  const bits = high + low;

  const sign = bits[0];
  const exponent = bits.slice(1, 12);
  const mantissa = bits.slice(12);

  const explanation = [
    `Sign bit: ${sign} (${sign === '0' ? 'Positive' : 'Negative'})`,
    `Exponent (11 bits): ${exponent} (${parseInt(exponent, 2)} - 1023 = ${parseInt(exponent, 2) - 1023})`,
    `Mantissa (52 bits): ${mantissa}`,
    `Full representation: ${sign} ${exponent} ${mantissa}`
  ];

  return { binary: bits, explanation };
}

export function getConversionSteps(from: string, to: string, value: string): string[] {
  const steps: string[] = [];

  if (from === 'decimal' && to === 'binary') {
    const num = parseInt(value, 10);
    steps.push(`Converting ${num} from Decimal to Binary:`);
    steps.push(`1. Divide ${num} by 2 repeatedly and note remainders`);

    let temp = num;
    const remainders: number[] = [];
    while (temp > 0) {
      remainders.unshift(temp % 2);
      steps.push(`   ${temp} ÷ 2 = ${Math.floor(temp / 2)} remainder ${temp % 2}`);
      temp = Math.floor(temp / 2);
    }

    steps.push(`2. Read remainders from bottom to top: ${remainders.join('')}`);
  } else if (from === 'binary' && to === 'decimal') {
    steps.push(`Converting ${value} from Binary to Decimal:`);
    steps.push(`Multiply each bit by 2^position (right to left, starting at 0)`);

    let sum = 0;
    for (let i = value.length - 1; i >= 0; i--) {
      const bit = parseInt(value[i]);
      const position = value.length - 1 - i;
      const contribution = bit * Math.pow(2, position);
      sum += contribution;
      steps.push(`   ${value[i]} × 2^${position} = ${contribution}`);
    }

    steps.push(`Sum: ${sum}`);
  } else if (from === 'decimal' && to === 'octal') {
    const num = parseInt(value, 10);
    steps.push(`Converting ${num} from Decimal to Octal:`);
    steps.push(`Divide by 8 repeatedly and note remainders`);

    let temp = num;
    while (temp > 0) {
      steps.push(`   ${temp} ÷ 8 = ${Math.floor(temp / 8)} remainder ${temp % 8}`);
      temp = Math.floor(temp / 8);
    }
  } else if (from === 'decimal' && to === 'hex') {
    const num = parseInt(value, 10);
    steps.push(`Converting ${num} from Decimal to Hexadecimal:`);
    steps.push(`Divide by 16 repeatedly and note remainders (A=10, B=11, C=12, D=13, E=14, F=15)`);

    let temp = num;
    while (temp > 0) {
      const remainder = temp % 16;
      const hexDigit = remainder > 9 ? String.fromCharCode(55 + remainder) : remainder;
      steps.push(`   ${temp} ÷ 16 = ${Math.floor(temp / 16)} remainder ${remainder} (${hexDigit})`);
      temp = Math.floor(temp / 16);
    }
  } else if (from === 'binary' && to === 'grey') {
    steps.push(`Converting ${value} from Binary to Grey Code:`);
    steps.push(`1. Keep the leftmost bit as is`);
    steps.push(`2. For each subsequent bit, XOR with the previous binary bit`);

    const decimal = binaryToDecimal(value);
    const grey = decimal ^ (decimal >> 1);
    const greyBinary = grey.toString(2).padStart(value.length, '0');

    steps.push(`   Binary: ${value}`);
    steps.push(`   Grey:   ${greyBinary}`);
  }

  return steps;
}

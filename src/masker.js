import opt from './config';

function maskit(value, mask) {
  value = value || '';
  mask = mask || '';
  const tokens = opt.token;
  let iMask = 0;
  let iValue = 0;
  let output = '';
  while (iMask < mask.length && iValue < value.length) {
    let cMask = mask[iMask];
    const masker = tokens[cMask];
    const cValue = value[iValue];
    if (masker && !masker.escape) {
      if (masker.pattern.test(cValue)) {
        output += masker.transform ? masker.transform(cValue) : cValue;
        iMask += 1;
      }
      iValue += 1;
    } else {
      if (masker && masker.escape) {
        iMask += 1; // take the next mask char and treat it as char
        cMask = mask[iMask];
      }
      output += cMask;
      if (cValue === cMask) iValue += 1; // user typed the same char
      iMask += 1;
    }
  }

  // fix mask that ends with a char: (#)
  let restOutput = '';
  while (iMask < mask.length) {
    const cMask = mask[iMask];
    if (tokens[cMask]) {
      restOutput = '';
      break;
    }
    restOutput += cMask;
    iMask += 1;
  }

  return output + restOutput;
}

export default function (value, config) {
  const masks = config.sort((a, b) => a.length - b.length);
  let i = 0;
  while (i < masks.length) {
    const currentMask = masks[i];
    i += 1;
    const nextMask = masks[i];
    if (!(nextMask && maskit(value, nextMask).length > currentMask.length))
      return maskit(value, currentMask);
  }
  return ''; // empty masks
}

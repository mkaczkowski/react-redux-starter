import { removeWhitespacesAndDashes } from '@core/utils/replacer/replacer';

export const DIGITS = /^[1234567890]*$/g;
export const NUMBERS = /^[0-9\.]*$/g;
export const LETTERS = /^[A-Za-z]*$/g;

//TODO readme
export const restrictCharacters = regexp => e => {
  if (e.type === 'paste' || e.type === 'drop') {
    return restrictOnPasteOrDrop(e, regexp);
  } else {
    return restrictOnKeyPress(e, regexp);
  }
};

export const handlePaste = e => {
  const textContent = (e.type === 'paste' ? e.clipboardData : e.dataTransfer).getData('text/plain');
  return removeWhitespacesAndDashes(textContent);
};

export const restrictOnPasteOrDrop = (textContent, regexp) => {
  return !!textContent.match(regexp);
};

export const restrictOnKeyPress = (e, regexp) => {
  const code = e.which || e.charCode || e.keyCode || 0;
  const character = String.fromCharCode(code);

  // if they pressed esc... remove focus from field...
  if (code === 27) {
    this.blur();
    return false;
  }
  // ignore if they are press other keys
  // strange because code: 39 is the down key AND ' key...
  // and DEL also equals .
  if (
    !e.ctrlKey &&
    code !== 9 &&
    code !== 8 &&
    code !== 36 &&
    code !== 37 &&
    code !== 38 &&
    (code !== 39 || (code === 39 && character === "'")) &&
    code !== 40
  ) {
    return !!character.match(regexp);
  }
};

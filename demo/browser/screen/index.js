const matchMediaSupported = () => 'matchMedia' in window;
const matches = (mediaQuery) =>
  matchMediaSupported() && window.matchMedia(mediaQuery).matches;

const LAYOUT_DEFINITION = {
  S: '(max-width:768px)',
  L: '(min-width:769px)',
};

export const getScreenSize = () => {
  let matched;
  for (let item in LAYOUT_DEFINITION) {
    if (matches(LAYOUT_DEFINITION[item])) {
      matched = item;
      break;
    }
  }
  return matched;
};

var preFix = 'zd';
export var usePrefix = function usePrefix(name) {
  return "".concat(preFix, "-").concat(name);
};
export var isDevMode = function isDevMode() {
  return process && process.env && process.env.NODE_ENV === 'development';
};
var warnings = {};
export var deprecationWarning = function deprecationWarning(key, message) {
  if (isDevMode()) {
    if (!warnings[key]) {
      console.warn(message);
      warnings[key] = true;
    }
  }
};
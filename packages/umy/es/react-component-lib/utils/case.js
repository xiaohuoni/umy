export var dashToPascalCase = function dashToPascalCase(str) {
  return str.toLowerCase().split('-').map(function (segment) {
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  }).join('');
};
export var camelToDashCase = function camelToDashCase(str) {
  return str.replace(/([A-Z])/g, function (m) {
    return "-".concat(m[0].toLowerCase());
  });
};
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';

// This will be replaced with React.ForwardedRef when react-output-target is upgraded to React v17

export var setRef = function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref != null) {
    // Cast as a MutableRef so we can assign current
    ref.current = value;
  }
};
export var mergeRefs = function mergeRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return function (value) {
    refs.forEach(function (ref) {
      setRef(ref, value);
    });
  };
};
export var createForwardRef = function createForwardRef(ReactComponent, displayName) {
  var forwardRef = function forwardRef(props, ref) {
    return /*#__PURE__*/React.createElement(ReactComponent, _extends({}, props, {
      forwardedRef: ref
    }));
  };
  forwardRef.displayName = displayName;
  return /*#__PURE__*/React.forwardRef(forwardRef);
};
export var defineCustomElement = function defineCustomElement(tagName, customElement) {
  if (customElement !== undefined && typeof customElements !== 'undefined' && !customElements.get(tagName)) {
    customElements.define(tagName, customElement);
  }
};
export * from "./attachProps";
export * from "./case";
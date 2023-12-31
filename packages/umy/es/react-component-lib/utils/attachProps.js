function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import { camelToDashCase } from "./case";
export var attachProps = function attachProps(node, newProps) {
  var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // some test frameworks don't render DOM elements, so we test here to make sure we are dealing with DOM first
  if (node instanceof Element) {
    // add any classes in className to the class list
    var className = getClassName(node.classList, newProps, oldProps);
    if (className !== '') {
      node.className = className;
    }
    Object.keys(newProps).forEach(function (name) {
      if (name === 'children' || name === 'style' || name === 'ref' || name === 'class' || name === 'className' || name === 'forwardedRef') {
        return;
      }
      if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
        var eventName = name.substring(2);
        var eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
        if (!isCoveredByReact(eventNameLc)) {
          syncEvent(node, eventNameLc, newProps[name]);
        }
      } else {
        node[name] = newProps[name];
        var propType = _typeof(newProps[name]);
        if (propType === 'string') {
          node.setAttribute(camelToDashCase(name), newProps[name]);
        }
      }
    });
  }
};
export var getClassName = function getClassName(classList, newProps, oldProps) {
  var newClassProp = newProps.className || newProps.class;
  var oldClassProp = oldProps.className || oldProps.class;
  // map the classes to Maps for performance
  var currentClasses = arrayToMap(classList);
  var incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(' ') : []);
  var oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(' ') : []);
  var finalClassNames = [];
  // loop through each of the current classes on the component
  // to see if it should be a part of the classNames added
  currentClasses.forEach(function (currentClass) {
    if (incomingPropClasses.has(currentClass)) {
      // add it as its already included in classnames coming in from newProps
      finalClassNames.push(currentClass);
      incomingPropClasses.delete(currentClass);
    } else if (!oldPropClasses.has(currentClass)) {
      // add it as it has NOT been removed by user
      finalClassNames.push(currentClass);
    }
  });
  incomingPropClasses.forEach(function (s) {
    return finalClassNames.push(s);
  });
  return finalClassNames.join(' ');
};

/**
 * Transforms a React event name to a browser event name.
 */
export var transformReactEventName = function transformReactEventName(eventNameSuffix) {
  switch (eventNameSuffix) {
    case 'doubleclick':
      return 'dblclick';
  }
  return eventNameSuffix;
};

/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
export var isCoveredByReact = function isCoveredByReact(eventNameSuffix) {
  if (typeof document === 'undefined') {
    return true;
  } else {
    var eventName = 'on' + transformReactEventName(eventNameSuffix);
    var isSupported = (eventName in document);
    if (!isSupported) {
      var element = document.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }
    return isSupported;
  }
};
export var syncEvent = function syncEvent(node, eventName, newEventHandler) {
  var eventStore = node.__events || (node.__events = {});
  var oldEventHandler = eventStore[eventName];

  // Remove old listener so they don't double up.
  if (oldEventHandler) {
    node.removeEventListener(eventName, oldEventHandler);
  }

  // Bind new listener.
  node.addEventListener(eventName, eventStore[eventName] = function handler(e) {
    if (newEventHandler) {
      newEventHandler.call(this, e);
    }
  });
};
var arrayToMap = function arrayToMap(arr) {
  var map = new Map();
  arr.forEach(function (s) {
    return map.set(s, s);
  });
  return map;
};
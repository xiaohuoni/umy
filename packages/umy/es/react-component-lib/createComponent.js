var _excluded = ["children", "forwardedRef", "style", "className", "ref"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React, { createElement } from 'react';
import { attachProps, camelToDashCase, createForwardRef, dashToPascalCase, isCoveredByReact, mergeRefs } from "./utils";
export var createReactComponent = function createReactComponent(tagName, ReactComponentContext) {
  var displayName = dashToPascalCase(tagName);
  var ReactComponent = /*#__PURE__*/function (_React$Component) {
    _inherits(ReactComponent, _React$Component);
    var _super = _createSuper(ReactComponent);
    function ReactComponent(props) {
      var _this;
      _classCallCheck(this, ReactComponent);
      _this = _super.call(this, props);
      _defineProperty(_assertThisInitialized(_this), "componentEl", void 0);
      _defineProperty(_assertThisInitialized(_this), "setComponentElRef", function (element) {
        _this.componentEl = element;
      });
      return _this;
    }
    _createClass(ReactComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.componentDidUpdate(this.props);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        attachProps(this.componentEl, this.props, prevProps);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          children = _this$props.children,
          forwardedRef = _this$props.forwardedRef,
          style = _this$props.style,
          className = _this$props.className,
          ref = _this$props.ref,
          cProps = _objectWithoutProperties(_this$props, _excluded);
        var propsToPass = Object.keys(cProps).reduce(function (acc, name) {
          var value = cProps[name];
          if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
            var eventName = name.substring(2).toLowerCase();
            if (typeof document !== 'undefined' && isCoveredByReact(eventName)) {
              acc[name] = value;
            }
          } else {
            // we should only render strings, booleans, and numbers as attrs in html.
            // objects, functions, arrays etc get synced via properties on mount.
            var type = _typeof(value);
            if (type === 'string' || type === 'boolean' || type === 'number') {
              acc[camelToDashCase(name)] = value;
            }
          }
          return acc;
        }, {});
        var newProps = _objectSpread(_objectSpread({}, propsToPass), {}, {
          ref: mergeRefs(forwardedRef, this.setComponentElRef),
          style: style
        });

        /**
         * We use createElement here instead of
         * React.createElement to work around a
         * bug in Vite (https://github.com/vitejs/vite/issues/6104).
         * React.createElement causes all elements to be rendered
         * as <tagname> instead of the actual Web Component.
         */
        return /*#__PURE__*/createElement(tagName, newProps, children);
      }
    }], [{
      key: "displayName",
      get: function get() {
        return displayName;
      }
    }]);
    return ReactComponent;
  }(React.Component);

  // If context was passed to createReactComponent then conditionally add it to the Component Class
  if (ReactComponentContext) {
    ReactComponent.contextType = ReactComponentContext;
  }

  // TODO: 这里应该传 PropType ，暂时传 any 是因为，类型还没写
  return createForwardRef(ReactComponent, displayName);
};
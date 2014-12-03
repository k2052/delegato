(function() {
  var Delegator, Mixin, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  Mixin = require('mixto');

  module.exports = Delegator = (function(_super) {
    __extends(Delegator, _super);

    function Delegator() {
      _ref = Delegator.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Delegator.delegatesProperties = function() {
      var object, propertyName, propertyNames, toMethod, toObject, toProperty, _arg, _i, _j, _len, _results,
        _this = this;
      propertyNames = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), _arg = arguments[_i++];
      toProperty = _arg.toProperty, toMethod = _arg.toMethod, toObject = _arg.toObject;
      object = null;
      if (toObject != null) {
        object = toObject;
      }
      _results = [];
      for (_j = 0, _len = propertyNames.length; _j < _len; _j++) {
        propertyName = propertyNames[_j];
        _results.push((function(propertyName) {
          return Object.defineProperty(_this, propertyName, (function() {
            if (toProperty != null) {
              return {
                get: function() {
                  if (toObject == null) {
                    object = this;
                  }
                  return object[toProperty][propertyName];
                },
                set: function(value) {
                  if (toObject == null) {
                    object = this;
                  }
                  return object[toProperty][propertyName] = value;
                }
              };
            } else if (toMethod != null) {
              return {
                get: function() {
                  if (toObject == null) {
                    object = this;
                  }
                  return object[toMethod]()[propertyName];
                },
                set: function(value) {
                  if (toObject == null) {
                    object = this;
                  }
                  return object[toMethod]()[propertyName] = value;
                }
              };
            } else if (toObject != null) {
              return {
                get: function() {
                  return object[propertyName];
                },
                set: function(value) {
                  return object[propertyName] = value;
                }
              };
            } else {
              throw new Error("No delegation target specified");
            }
          })());
        })(propertyName));
      }
      return _results;
    };

    Delegator.delegatesMethods = function() {
      var methodName, methodNames, object, toMethod, toObject, toProperty, _arg, _i, _j, _len, _results,
        _this = this;
      methodNames = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), _arg = arguments[_i++];
      toProperty = _arg.toProperty, toMethod = _arg.toMethod, toObject = _arg.toObject;
      object = null;
      if (toObject != null) {
        object = toObject;
      }
      _results = [];
      for (_j = 0, _len = methodNames.length; _j < _len; _j++) {
        methodName = methodNames[_j];
        _results.push((function(methodName) {
          if (toProperty != null) {
            return _this[methodName] = function() {
              var args, _ref1;
              args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
              if (toObject == null) {
                object = this;
              }
              return (_ref1 = object[toProperty])[methodName].apply(_ref1, args);
            };
          } else if (toMethod != null) {
            return _this[methodName] = function() {
              var args, _ref1;
              args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
              if (toObject == null) {
                object = this;
              }
              return (_ref1 = object[toMethod]())[methodName].apply(_ref1, args);
            };
          } else if (toObject != null) {
            return _this[methodName] = function() {
              var args;
              args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
              return object[methodName].apply(object, args);
            };
          } else {
            throw new Error("No delegation target specified");
          }
        })(methodName));
      }
      return _results;
    };

    Delegator.prototype.delegatesProperties = function() {
      var object, propertyName, _i, _len, _results,
        _this = this;
      object = null;
      if (typeof toObject !== "undefined" && toObject !== null) {
        object = toObject;
      }
      _results = [];
      for (_i = 0, _len = propertyNames.length; _i < _len; _i++) {
        propertyName = propertyNames[_i];
        _results.push((function(propertyName) {
          return Object.defineProperty(_this, propertyName, (function() {
            if (typeof toProperty !== "undefined" && toProperty !== null) {
              return {
                get: function() {
                  if (typeof toObject === "undefined" || toObject === null) {
                    object = this;
                  }
                  return object[toProperty][propertyName];
                },
                set: function(value) {
                  if (typeof toObject === "undefined" || toObject === null) {
                    object = this;
                  }
                  return object[toProperty][propertyName] = value;
                }
              };
            } else if (typeof toMethod !== "undefined" && toMethod !== null) {
              return {
                get: function() {
                  if (typeof toObject === "undefined" || toObject === null) {
                    object = this;
                  }
                  return object[toMethod]()[propertyName];
                },
                set: function(value) {
                  if (typeof toObject === "undefined" || toObject === null) {
                    object = this;
                  }
                  return object[toMethod]()[propertyName] = value;
                }
              };
            } else if (typeof toObject !== "undefined" && toObject !== null) {
              return {
                get: function() {
                  return object[propertyName];
                },
                set: function(value) {
                  return object[propertyName] = value;
                }
              };
            } else {
              throw new Error("No delegation target specified");
            }
          })());
        })(propertyName));
      }
      return _results;
    };

    Delegator.prototype.delegatesMethods = function() {
      var methodName, object, _i, _len, _results,
        _this = this;
      object = null;
      if (typeof toObject !== "undefined" && toObject !== null) {
        object = toObject;
      }
      _results = [];
      for (_i = 0, _len = methodNames.length; _i < _len; _i++) {
        methodName = methodNames[_i];
        _results.push((function(methodName) {
          if (typeof toProperty !== "undefined" && toProperty !== null) {
            return _this[methodName] = function() {
              var args, _ref1;
              args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
              if (typeof toObject === "undefined" || toObject === null) {
                object = this;
              }
              return (_ref1 = object[toProperty])[methodName].apply(_ref1, args);
            };
          } else if (typeof toMethod !== "undefined" && toMethod !== null) {
            return _this[methodName] = function() {
              var args, _ref1;
              args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
              if (typeof toObject === "undefined" || toObject === null) {
                object = this;
              }
              return (_ref1 = object[toMethod]())[methodName].apply(_ref1, args);
            };
          } else if (typeof toObject !== "undefined" && toObject !== null) {
            return _this[methodName] = function() {
              var args;
              args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
              return object[methodName].apply(object, args);
            };
          } else {
            throw new Error("No delegation target specified");
          }
        })(methodName));
      }
      return _results;
    };

    Delegator.delegatesProperty = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return this.delegatesProperties.apply(this, args);
    };

    Delegator.delegatesMethod = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return this.delegatesMethods.apply(this, args);
    };

    return Delegator;

  })(Mixin);

}).call(this);

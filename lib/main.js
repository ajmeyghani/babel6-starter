'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fn = function fn() {
  return 5;
};

var Person = function () {
  function Person() {
    _classCallCheck(this, Person);

    this.name = 'al';
  }

  _createClass(Person, [{
    key: 'hello',
    value: function hello() {
      return 'hello';
    }
  }]);

  return Person;
}();

var n1 = [1, 2, 3];
var n2 = [4, 5, 6];

var all = [].concat(n1, n2);

function fnx() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.reduce(function (res, n) {
    return res + n;
  });
}
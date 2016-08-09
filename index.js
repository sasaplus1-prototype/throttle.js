'use strict';

var now = (typeof Date.now !== 'undefined') ?
  function() {
    return Date.now();
  } :
  function() {
    return new Date().getTime();
  };

module.exports = function(fn, interval) {
  var last = now() - interval;

  return function() {
    if (last + interval <= now()) {
      last = now();

      fn.apply(this, arguments);
    }
  };
};

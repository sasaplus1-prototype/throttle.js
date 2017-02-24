'use strict';

var now = (typeof Date.now !== 'undefined') ?
  function() {
    return Date.now();
  } :
  function() {
    return (new Date).getTime();
  };

module.exports = function(fn, interval) {
  var last = now() - interval;

  return function() {
    var args;

    if (last + interval > now()) {
      return;
    }

    last = now();
    args = arguments;

    switch (args.length) {
      case 0:
        return fn.call(this);
      case 1:
        return fn.call(this, args[0]);
      case 2:
        return fn.call(this, args[0], args[1]);
      case 3:
        return fn.call(this, args[0], args[1], args[2]);
      default:
        return fn.apply(this, args);
    }
  };
};

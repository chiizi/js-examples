var secretKeeper = function(seekrit) {
  return {
    secret: function() { return seekrit },
  };
};

var advancedSecretKeeper = function(seekrit, nextFn, resetCondition) {
  resetCondition || (resetCondition = function() {
    return false;
  });
  var initSeekrit = new (seekrit.constructor)(seekrit);
  return function() {
    if (resetCondition(seekrit = nextFn(seekrit)))
      seekrit = new (initSeekrit.constructor)(initSeekrit);
    return seekrit;
  };
};

var idGiver = advancedSecretKeeper(0, function(n) {
  return n + 1;
});

var milIdGiver = advancedSecretKeeper(0, function(n) {
  return n + 1;
}, function(n) {
  return n > 1000000;
});

var nIdGiver = function(lim) {
  return advancedSecretKeeper(0, function(n) {
    return n + 1;
  }, function(n) {
    return n > lim;
  });
};

// you know you need to do a rewrite when your config file format is turing complete

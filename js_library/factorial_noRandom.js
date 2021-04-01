factorial_noRandom = function(factors, repetitions, unpack) {

    var factorNames = Object.keys(factors);

    var factor_combinations = [];

    for (var i = 0; i < factors[factorNames[0]].length; i++) {
      factor_combinations.push({});
      factor_combinations[i][factorNames[0]] = factors[factorNames[0]][i];
    }

    for (var i = 1; i < factorNames.length; i++) {
      var toAdd = factors[factorNames[i]];
      var n = factor_combinations.length;
      for (var j = 0; j < n; j++) {
        var base = factor_combinations[j];
        for (var k = 0; k < toAdd.length; k++) {
          var newpiece = {};
          newpiece[factorNames[i]] = toAdd[k];
          factor_combinations.push(Object.assign({}, base, newpiece));
        }
      }
      factor_combinations.splice(0, n);
    }

    repetitions = (typeof repetitions === 'undefined') ? 1 : repetitions;
    for (var i = 0; i < repetitions-1; i++){
        var factor_combinations = factor_combinations.concat(factor_combinations)
    }
    
    return factor_combinations;
  }
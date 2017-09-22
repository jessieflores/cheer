
function cheer(list) {

  return _.map(list, function(val) {return val.toUpperCase() + " " val.toUpperCase() + " " ;});

}


console.log(cheer(['apple', 'pear']));
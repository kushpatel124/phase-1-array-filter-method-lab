
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}


//console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch(drivers, name) {
  return drivers.filter(function (driver) {
    return driver[0] === name[0]
  });
}

function matchName(drivers, name) {
  console.log(typeof name, name);
  return drivers.filter(function (driver) {
    return driver.name === name;
  })
}
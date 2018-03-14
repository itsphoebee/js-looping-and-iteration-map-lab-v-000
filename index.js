// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(x => x.toLowerCase());
  return newDrivers;
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
});
}

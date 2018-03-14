// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(x => x.toLowerCase());
  return newDrivers;
}

function nameToAttributes(drivers) {
  return drivers.map(function (name) {
    const firstName = name.split(' ')[0];
    const lastName = name.split(' ')[1];

    return { firstName: firstName, lastName: lastName };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(driver => return `${driver.name} is from ${driver.hometown}`)

}

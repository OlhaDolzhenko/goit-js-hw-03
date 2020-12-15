const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  const keys = Object.keys(employees);
  let biggestValue = values[0];
  for (let i = 1; i < values.length; i += 1) {
    if (biggestValue < values[i]) {
      biggestValue = values[i];
    }
  }
  const index = values.indexOf(biggestValue);
  return keys[index];
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);

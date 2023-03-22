// /In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countries = [
    'india',
    'Pakistan',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
  ]
  let index = countries.indexOf('Ethiopia');
  if (index === -1){
console.log('This country does not exist in the array')
  }else {
    'This country does exist in the array'
  }
  countries[3] = 'ETHIOPIA';
  console.log(countries);
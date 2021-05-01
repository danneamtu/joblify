let location = 'belgium, North Holland, Netherlands'
let explodeLocation = location.split(',')
let city = explodeLocation[0].toLowerCase()

let countries = ['netherlands', 'belgium', 'ireland']

const itsCountry = countries.find((country) => (country === city ? true : false))

if (!itsCountry) {
  console.log('insert', city)
} else {
  console.log('its a country')
}

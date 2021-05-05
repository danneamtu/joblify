const ob = {}
const loc = 'sweden'
const value = 'front end'

const newOb = { ...ob, [loc]: value }

console.log('new', newOb)

import { data } from './data/person.js'
import { expression } from './data/regEx.js'

// Required regex to validate
const schema = {
  ...expression
}
// Person data
const personObj = {
  ...data
}
// Validation magic
const validate = (object, schema) =>
  Object.keys(schema)
    .filter((key) => !schema[key](object[key]))
    .map((key) => new Error(`"${key}" is invalid.`))

const errors = validate(personObj, schema)

if (errors.length > 0) {
  for (const { message } of errors) {
    console.log(message)
    document.getElementById('app').innerHTML = message
  }
} else {
  console.log('You may pass')
  document.getElementById('app').innerHTML = 'You may pass'
}

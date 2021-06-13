export const expression = {
  name: (value) => /^([A-Z][a-z\-]* )+[A-Z][a-z\-]*( \w+\.?)?$/.test(value),
  age: (value) => parseInt(value) === Number(value) && value >= 18,
  phone: (value) => /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(value),
  siblings: (value) =>
    value.length > 0 && value.map((name) => /^[a-z][a-z '-.,]{0,31}$|^$/i.test(name)),
  metaData: (value) => Object.keys(value).length === 0,
  active: (value) => value === true
}

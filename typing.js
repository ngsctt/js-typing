function isString (input) {
  return typeof input === 'string' || input instanceof String
}

function notString (input) {
  return typeof input !== 'string' && ! (input instanceof String)
}

export {
  isString,
  notString
}
const auth = require('basic-auth')

module.exports = req => {
  const { name, pass } = auth(req) || {}
  return name === process.env.AUTH_LOGIN && pass === process.env.AUTH_PASSWORD
}

const { json, send } = require('micro')
const authenticate = require('./auth')
const sendMessage = require('./sendMessage')

const numbers = process.env.PHONENUMBERS.split(',')

module.exports = async function abc (req, res) {
  if (!authenticate(req)) {
    res.setHeader('WWW-Authenticate', 'Basic realm="example"')
    return send(res, 401, { error: 'unauthorized' })
  }

  const { state, alert, check } = await json(req)
  const { type } = alert
  const { name, url } = check

  const body = `
    Alert ${state}: ${type}
    ${name} (${url})
  `

  for (number of numbers) {
    await sendMessage({
        body,
        to: number,
        from: process.env.TWILIO_PHONENUMBER
    })
  }

  return 'sent'
}

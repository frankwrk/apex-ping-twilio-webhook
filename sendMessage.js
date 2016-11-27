const twilioLibrary = require('twilio')

const accountSid = process.env.TWILIO_SID
const authToken = process.env.TWILIO_AUTHTOKEN

const client = new twilioLibrary.Twilio(accountSid, authToken);

module.exports = function sendMessage (options) {
  return new Promise((resolve, reject) => {
    client.messages.create(options, (err, message) => {
      if(err) { return reject(err) }

      return resolve(message)
    })
  })
}

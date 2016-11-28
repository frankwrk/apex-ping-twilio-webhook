# Apex Ping Twilio webhook

Send sms alerts based on an [Apex Ping](https://apex.sh/ping/) alert rule.

Based on [Apex Ping webhooks specification](https://apex.sh/ping/help/guides/webhooks)

```
# Phonenumber(s) to alert (comma seperated)
PHONENUMBERS='+1234567890,+19876543210'

# Twilio credentials and PHONENUMBERS
TWILIO_SID=abcdefg # Can be found in the Twilio console
TWILIO_AUTHTOKEN=abcdef # Can be found in the Twilio console
TWILIO_PHONENUMBER='+1234567890'

# Basic auth username and password
AUTH_LOGIN=test
AUTH_PASSWORD=test
```                                

### Run application

1. Make sure you define above ENV variables
2. Clone this repository
3. Run `npm install` or `yarn`
4. Run `micro`


### Deploy to now.sh

Run `now` with the `-e` option to define above environment variables

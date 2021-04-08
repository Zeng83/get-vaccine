require('dotenv').config();
import client from 'twilio';

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN
} = process.env;

export const onSendMsg = msg => {
  client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN).messages
    .create({
      body: msg,
      from: '+1415888888',
      to: '+1408999999'
    })
    .then(message => console.log(message.sid))
    .catch(error => {
      console.log(error);
    });
}
import { sendTwilioSms } from './carriers';
import { getUpdates } from './agents/cvs';

const onCallUpdate = async () => {
  const result = await getUpdates();
  const vaccines = Object.keys(result);
  let msg = '';

  if (vaccines.length !== 0) {
    vaccines.map(vaccine => {
      msg += `${vaccine} available: ${result[vaccine].join(',')}; `;
      return result[vaccines];
    })
    msg += ", pls login https://www.cvs.com/vaccine/intake/store/covid-screener/covid-qns";
    console.log(msg);

    sendTwilioSms(msg);
  } else {
    console.log('bad lucky');
  }
}
// Janssen/J&J available: 94706,94706,94706,94706,94706;
const triggerSchedule = () => {
  setTimeout(() => {
    onCallUpdate();
    triggerSchedule();
  }, 900000)
};

triggerSchedule();
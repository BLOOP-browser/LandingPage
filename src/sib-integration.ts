// const SibApiV3Sdk = require('sib-api-v3-typescript');

// let apiInstance = new SibApiV3Sdk.EmailCampaignsApi();

// let apiKey = apiInstance.authentications['apiKey'];
const key = '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';
export async function sendEmailTest(email_address: string) {
  if (validateEmail(email_address)) {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': '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'
      },
      body: JSON.stringify({
        sender: {name: 'Bloop', email: 'hi@bloop.co'},
        to: [{email: 'osvaldo@armas.ai', name: 'Bloop Browser'}],
        textContent: email_address + " Signed Up",
        subject: email_address + " Signed Up"
      })
    };
    const response = await fetch('https://api.sendinblue.com/v3/smtp/email', options);
    console.log(response)
    return response
  }
  
 
}

function validateEmail(email: string) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
}
export {}
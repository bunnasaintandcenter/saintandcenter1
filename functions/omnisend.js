var rp = require("request-promise");

exports.handler = async (event, context) => {
  try {

    const { email } = JSON.parse(event.body);

    var options = { method: 'POST',
      url: 'https://api.omnisend.com/v3/contacts',
      headers:
       { 'content-type': 'application/json',
         'x-api-key': '5d6d46aa8653ed0357cf4de1-aH8RW8C9471vhaUzA4LddgiHVSq0X0DhPwjs6BWmzRJBkecdPM' },
      body:
       {
         email: email,
         status: 'subscribed',
         statusDate: '2016-02-28T21:17:23Z',
      },
      json: true
    };

    const response = await rp(options)

    console.log(response)

    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }

  } catch(err) {
    return {
      statusCode: 500,
      body: err.message
    }
}}

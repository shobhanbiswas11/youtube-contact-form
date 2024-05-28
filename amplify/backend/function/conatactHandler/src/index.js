const { sendEmail } = require("./send-email");
const { sesClient } = require("./ses-client");
const fromEmail = "shobhan.biswas11@gmail.com";

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// eslint-disable-next-line no-undef
exports.handler = async (event) => {
  const { email, message } = JSON.parse(event.body);

  await sendEmail({
    client: sesClient,
    subject: "New Message",
    body: `Email: ${email}\nmessage: ${message}`,
    to: fromEmail,
    from: fromEmail,
  });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify("Has been submitted properly"),
  };
};

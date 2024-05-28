const { SESv2Client } = require("@aws-sdk/client-sesv2");
const client = new SESv2Client({
  region: "ap-south-1",
});

module.exports.sesClient = client;

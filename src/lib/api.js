import { post } from "aws-amplify/api";

export async function sendEmailAndMessage(values) {
  try {
    const restOperation = post({
      apiName: "contactFormApi",
      path: "/contact",
      options: {
        body: values,
      },
    });

    const { body } = await restOperation.response;
    const response = await body.json();

    console.log("POST call succeeded");
    console.log(response);
  } catch (e) {
    console.log("POST call failed: ", JSON.parse(e.response.body));
  }
}

const { expect, SynthUtils } = require("@aws-cdk/assert");
const cdk = require("@aws-cdk/core");
const AwsTest = require("../../lib/aws-text-service-stack");

// test("Empty Stack", () => {
//   const app = new cdk.App();
//   // WHEN
//   const stack = new AwsTest.AwsTextServiceStack(app, "MyTestStack");
//   // THEN
//   console.log("the stack is", stack);

//   expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
// });

const cdk = require("@aws-cdk/core");
const {
  LambdaRestApi,
  LambdaIntegration,
} = require("@aws-cdk/aws-apigateway");
const { AssetCode, Function, Runtime } = require("@aws-cdk/aws-lambda");

class AwsTextServiceStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const donateFunction = new Function(this, "donateFunction", {
      code: new AssetCode("resources"),
      handler: "donation.handler",
      runtime: Runtime.NODEJS_12_X,
    });

    const donationLambdaRestApi = new LambdaRestApi(
      this,
      "donationLambdaRestApi",
      {
        restApiName: "Donation API",
        handler: donateFunction,
        proxy: false,
      }
    );

    const donate = donationLambdaRestApi.root.addResource("Donate");

    donate.addMethod("POST", new LambdaIntegration(donateFunction), {});
    // The code that defines your stack goes here
  }
}

module.exports = { AwsTextServiceStack };

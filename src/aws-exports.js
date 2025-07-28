// Replace the values below with your actual Cognito User Pool and Identity Pool details
const awsExports = {
  Auth: {
    region: "YOUR_AWS_REGION",
    userPoolId: "YOUR_USER_POOL_ID",
    userPoolWebClientId: "YOUR_USER_POOL_WEB_CLIENT_ID",
    mandatorySignIn: false,
  },
};

export default awsExports;

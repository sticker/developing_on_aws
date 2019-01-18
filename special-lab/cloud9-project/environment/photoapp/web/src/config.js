export var amplify_config = {
    Auth: {
        identityPoolId: 'us-west-2:94be775a-29d8-4da8-bca1-5e1e2f7f4d86', // Amazon Cognito Identity Pool ID. such as us-west-2:701434d1-a5b7-4ad5-a1bb-88e96af455bc
        region: 'us-west-2', // Amazon Cognito Region
        userPoolId: 'us-west-2_lA6NxZM3O', //Amazon Cognito User Pool ID. such as us-west-2_abcDEFEg
        userPoolWebClientId: '1ct30o99c0qs28vppabpg6dgt5', // Amazon Cognito Web Client ID. such as 33ud1vufabcedfgee866r9k0hnm
    },
    Storage: {
        bucket: 'devawsome-photo-hoshino.tetsuya', //  Amazon S3 bucket. 
        region: 'us-west-2' //Amazon service region
    },
    API: {
        endpoints: [{
            name: 'DevAWSomeDayAPI',
            endpoint: 'https://w056uj96ni.execute-api.us-west-2.amazonaws.com/prod', // API Gateway Endpoint. such as https://abcdefghij.execute-api.us-west-2.amazonaws.com/prod
            region: 'us-west-2' //Amazon service region
        }]
    }
};

export default amplify_config;

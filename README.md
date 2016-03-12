# awslambda2googlefunctions (JS)

Rewrite-js transformation module to map [AWS Lambda functions](https://aws.amazon.com/lambda/) into [Google Functions](https://cloud.google.com/functions/docs) (only JavaScript).

# Installation

Install [rewrite-js](https://github.com/chrisdickinson/rewrite-js) as follows:

`npm install -g rewrite-js`

# Usage

You can generate the Google Functions output - given your AWS Lambda function input - as follows:

`cat lambda_function.js | rewrite-js awslambda2googlefunctions.js > google_function.js`

You can have a look at some examples [here](../tree/master/examples/).

# Notes

This tool is only supposed to speed the function porting process up. It won't take care of resolving unpredictable naming conflicts, testing or deploying your new Google function.
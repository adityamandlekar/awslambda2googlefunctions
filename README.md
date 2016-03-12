# awslambda2googlefunctions (JS)

Rewrite-js transformation module to map AWS Lambda functions into Google Functions (only JavaScript).

# Installation

Install [rewrite-js](https://github.com/chrisdickinson/rewrite-js) as follows:

`npm install -g rewrite-js`

# Usage

You can generate the Google Functions output - given your AWS Lambda function input - as follows:

`cat lambda_function.js | rewrite-js awslambda2googlefunctions.js > google_function.js`
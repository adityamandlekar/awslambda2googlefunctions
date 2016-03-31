# awslambda2googlefunctions (JS)

Rewrite-js transformation module to map [AWS Lambda functions](https://aws.amazon.com/lambda/) into [Google Cloud Functions](https://cloud.google.com/functions/docs) (only JavaScript).


## Forewords

This conversion tool was inspired by my recent review of Google's alpha-release of Cloud Functions: [Google Cloud Functions VS AWS Lambda: fight for serverless cloud domination begins](http://cloudacademy.com/blog/google-cloud-functions-serverless/).


## Installation

Install [rewrite-js](https://github.com/chrisdickinson/rewrite-js) as follows:

`npm install -g rewrite-js`

## Usage

You can generate the Google Functions output - given your AWS Lambda function input - as follows:

`cat lambda_function.js | rewrite-js awslambda2googlefunctions.js > google_function.js`

You can have a look at some examples [here](examples/).

## Notes

This tool is only supposed to speed the function porting process up. It won't take care of resolving unpredictable naming conflicts, testing or deploying your new Google function.

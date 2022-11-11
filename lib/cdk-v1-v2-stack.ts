import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
// import * as sqs from '@aws-cdk/aws-sqs';

export class CdkV1V2Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true
    });
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkV1V2Queue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}

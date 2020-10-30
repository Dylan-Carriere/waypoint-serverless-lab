'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); 

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const tableName =  process.env.WAYPOINT_TABLE;

module.exports.waypointInjestion = async event => {

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        TableName: tableName,
        message: 'test function getTrackerDevices!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
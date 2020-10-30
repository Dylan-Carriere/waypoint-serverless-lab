'use strict';


const uuid = require('uuid');
const AWS = require('aws-sdk'); 

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const tableName =  process.env.WAYPOINT_TABLE;

module.exports.getMap = async event => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      {
        message: 'test function getMap!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
 

module.exports.getGeofence = async event => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      {
        message: 'test function getGeofence!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.getTrackerDevices = async event => {

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
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


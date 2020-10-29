'use strict';

module.exports.getMap = async event => {
  return {
    statusCode: 200,
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
    body: JSON.stringify(
      {
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
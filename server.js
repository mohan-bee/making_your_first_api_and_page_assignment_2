// Boilerplate Code for HTTP Status Code API
const express = require('express');
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/

app.get('/status-info', (req, res) =>{
  const  {code} = req.query
  console.log(code)
  const  statusCode = parseInt(code, 10)
  
  switch (statusCode) {

    case 200:
        res.json({
            status: 200,
            message: "OK: Request was successful."
        });
        break;
    case 201:
        res.json({
            status: 201,
            message: "Created: A resource has been successfully created."
        });
        break;
    case 204:
        res.json({
            status: 204,
            message: "No Content: Request processed successfully, no content returned."
        });
        break;

    case 400:
        res.json({
            status: 400,
            message: "Bad Request: The request is invalid due to client-side errors."
        });
        break;
    case 401:
        res.json({
            status: 401,
            message: "Unauthorized: Authentication is required to access the resource."
        });
        break;
    case 403:
        res.json({
            status: 403,
            message: "Forbidden: Server refuses to authorize the request."
        });
        break;
    case 404:
        res.json({
            status: 404,
            message: "Not Found: The resource does not exist."
        });
        break;
    case 405:
        res.json({
            status: 405,
            message: "Method Not Allowed: HTTP method not supported for this resource."
        });
        break;
    case 429:
        res.json({
            status: 429,
            message: "Too Many Requests: User has exceeded rate limits."
        });
        break;

    case 500:
        res.json({
            status: 500,
            message: "Internal Server Error: The server encountered an error."
        });
        break;
    case 502:
        res.json({
            status: 502,
            message: "Bad Gateway: The server received an invalid response from the upstream server."
        });
        break;
    case 503:
        res.json({
            status: 503,
            message: "Service Unavailable: Server temporarily overloaded or under maintenance."
        });
        break;
    case 504:
        res.json({
            status: 504,
            message: "Gateway Timeout: The server did not receive a timely response from the upstream server."
        });
        break;

    default:
        res.json({
            status: 400,
            message: "Bad Request: Invalid or unsupported status code provided."
        });

}})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});

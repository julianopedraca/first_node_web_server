require("http")
  .createServer((inRequest, inResponse) => {
    const requestModule = require("request");
    requestModule(
      "https://worldtimeapi.org/api/timezone/America/New_York",
      function (inErr, inResp, inBody) {
        inResponse.end(`Hello from my first Node Web Server: ${inBody}`);
      }
    );
  })
  .listen(8080);

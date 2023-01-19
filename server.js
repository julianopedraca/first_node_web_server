require("http").createServer((inRequest, inResponse) => {
    inResponse.end("Meu primeiro server Node.js");
  }).listen(8080);
  
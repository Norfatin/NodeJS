const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Create New User</title><head>");
    res.write("<body><h1>New User</h1> </body>");
    res.write(
      '<body><form action="/create_user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title><head>");
    res.write("<body><h1>Registered Users</h1></body>");
    res.write("<body><ul><li>1</li><li>2</li></ul></body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create_user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
};

exports.handler = requestHandler;
exports.someText = "Assignment";

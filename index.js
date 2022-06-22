const express = require("express");
const app = express();

//create a server object:
app.get("/", function (req, res) {
  console.log('request got')
  res.setHeader('Content-Type', 'text/text');

  res.write("Hello World!..."); //write a response to the client
  let count = 1;
  const interval = setInterval(() => {
    res.write(`\nAnother Line! ${count}`);
    count += 1;
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    res.write("\nokay that's enough")
    res.end(); //end the response
    console.log('done')
  }, 10_000);
});

app.listen(8080, function () {
  console.log("server running on 8080");
}); //the server object listens on port 8080

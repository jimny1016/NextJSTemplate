const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const dev = false;
const hostname = "localhost";
const port = 80;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
const httpsOptions = {
   // key: fs.readFileSync("ibuypower.key"),
   // cert: fs.readFileSync("ibuypower.crt"),
};
app.prepare().then(() => {
   createServer(httpsOptions, async (req, res) => {
      try {
         const parsedUrl = parse(req.url, true);
         await handle(req, res, parsedUrl);
      }
      catch (err) {
         console.error("Error occurred handling", req.url, err);
      }
   }).listen(port, (err) => {
      if (err) throw err;
      console.log("> Next.js server started.");
   });
});
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const hostname = '127.0.0.1';
const port = 5500;



http.createServer((req, res) => {

  console.log('REQ URL', req.url)
  var parsed = url.parse(req.url, true)
  console.log("-----------", parsed.pathname)

  var filename = path.parse(parsed.pathname)
  console.log({ filename })
  // var filename = "." + parsed.pathname

  // console.log({ filename })
  // console.log('filen', filename.name)
  // console.log('ext', filename.ext)
  // console.log('dir', filename.dir)
  // console.log('page', filename.name)
  // return;
  filen = filename.name == "" ? "index" : filename.name + "";
  filen = filename.name == "" ? "about" : filename.name + "";
  ext = filename.ext == "" ? "" : filename.ext;
  dir = filename.dir == "/" ? "" : filename.dir + "/";
  page = filename.name == "" ? "index.html" : filename.name + ext
  page = filename.name == "" ? "about.html" : filename.name + ext


  console.log({ dir, filen, ext, page })

  f = (dir + filen + ext).replace("/", "")



  console.log({ f })
  var mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".png": "image/png",
    ".html": "text/html",
    ".gif": "image/gif",
  }


  if (f) {
    fs.readFile(f, function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        return res.end("404 Page Not Found")

      }
      if (page) {

        if (mimeTypes.hasOwnProperty(ext)) {


          res.writeHead(200, { "Content-Type": ext })
          res.write("<script>var  page = '" + page + "'; </script>")
          res.end(data, "utf-8")
        }
      }
    })
  }
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

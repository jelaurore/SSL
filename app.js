"use strict"

var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');
var express = require("express");
var request = require("request");
var bodyParse = require("body-parser");

// app.use(bodyParse.json());
// app.use(bodyParse.urlencoded({extended:true}));


// const hostname = 'localhost';
// const port = 8080;

let ejs = require("ejs");
const router = express.Router();
var app = express();
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);

router.get("/",function(req,res) {

  res.render("index",{pagename:"Home"}); //views indes.ejs

})

router.get("/about",function(req,res) {

  res.render("about",{pagename:"About"});

})

router.post("/login",function(req,res){
  // console.log(req.body.email);
  // console.log(req.body.password);
  var errors=[];
  if(req.body.email ==""){
    errors.push("Email is rquired")
  }
  if(req.body.password ==""){
    errors.push("Password is rquired")
  }
  if(!/^\w+([\.-]?\w+)+@\w+([\.-]?\w+)+(\.\w(2,3))+$/.test(req.body.email)){
    errors.push("Email is not valid")
  }

  if(!/^[a-zA-Z]\w{3,14}$/.test(req.body.password)){
    errors.push("Password is not valid")
  }

  res.render("index",{pagename:"Home",errors:errors});

})

app.use(express.static("public"));
app.use("/", router);
var server = app.listen("8080");
// http.createServer((req, res) => {

//   console.log('REQ URL', req.url)
//   var parsed = url.parse(req.url, true)
//   console.log("-----------", parsed.pathname)

//   var filename = path.parse(parsed.pathname)
//   console.log({ filename })
//   // var filename = "." + parsed.pathname

//   // console.log({ filename })
//   // console.log('filen', filename.name)
//   // console.log('ext', filename.ext)
//   // console.log('dir', filename.dir)
//   // console.log('page', filename.name)
//   // return;
//   filen = filename.name == "" ? "index" : filename.name + "";
//   ext = filename.ext == "" ? ".html" : filename.ext;
//   dir = filename.dir == "/" ? "" : filename.dir + "/";
//   page = filename.name == "" ? "index.html" : filename.name + ext

//   console.log({ dir, filen, ext, page })

//   f = (dir + filen + ext).replace("/", "")



//   console.log({ f })
//   var mimeTypes = {
//     ".html": "text/html",
//     ".js": "text/javascript",
//     ".css": "text/css",
//     ".png": "image/png",
//     ".html": "text/html",
//     ".gif": "image/gif",
//   }


//   if (f) {
//     fs.readFile(f, function (err, data) {
//       if (err) {
//         res.writeHead(404, { 'Content-Type': 'text/html' })
//         return res.end("404 Page Not Found")

//       }
//       if (page) {

//         if (mimeTypes.hasOwnProperty(ext)) {


//           res.writeHead(200, { "Content-Type": ext })
//           res.write("<script>var  page = '" + page + "'; </script>")
//           res.end(data, "utf-8")
//         }
//       }
//     })
//   }
// }).listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

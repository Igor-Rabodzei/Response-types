const express = require("express");
const ms = require('mediaserver');
const http = require('http');
const app = express();
const server = http.createServer(app);

server.listen(3000);
console.log('Express server started on port %s', `http://localhost:${server.address().port}`);

app.get("/", (req, res, next) => {
  res.type('html');
  res.status(200).send(`
  <div>
    <h1>Use one of the links</h1> 
    <a href="/json">json</a>
    <a href="/xml">xml</a>
    <a href="/png">png</a>
    <a href="/html">html</a>
    <a href="/audio">audio</a>
    <a href="/text">text</a>
  </div>
  `);
 });

app.get("/json", (req, res, next) => {
  res.json({ userId: 1,
    "id":3,
    "title":"ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut" });
 });

 app.get("/xml", (req, res, next) => {
  res.type('application/xml');
  res.status(200).send("<?xml version=\"1.0\" encoding=\"UTF-8\"?> <note> <from>Jani</from> <to>Tove</to> <message>Remember me this weekend</message> </note>");
 });

 app.get("/png", (req, res, next) => {
  res.type('png');
  res.status(200).sendFile('/var/www/restApi/download.png');
 });

 app.get("/html", (req, res, next) => {
  res.type('html');
  res.status(200).send("<!DOCTYPE html> <html> <body> <h1>My First Heading</h1> <p>My first paragraph.</p> </body> </html>");
 });

 app.get("/text", (req, res, next) => {
  res.type('text');
  res.status(200).send("some typed text");
 });

 app.get("/audio", (req, res, next) => {
  ms.pipe(req, res, '/var/www/restApi/audio.mp3');
 });
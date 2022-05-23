const http = require("http");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const express = require("express");
const { userInfo } = require("os");
const User = require("./models/index").User;
const encrypt = require('node-file-encrypt');
const userController = require("./controllers/user");
let filePath = '/uploads'; // source file path
let encryptPath = '';
const app = express();
const httpServer = http.createServer(app);
const Cryptr = require('cryptr');
const PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser')
httpServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// put the HTML file containing your form in a directory named "public" (relative to where this script is located)
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});




app.get('/user', userController.list);
// app.post("/upload", upload.single("image"), async (req, res) => {
//   let f = new encrypt.FileEncrypt({...req.file }.path);
//   f.openSourceFile();
//   f.encrypt('111111');
//   encryptPath = f.encryptFilePath;
//   console.log("encrypt sync done");
//     await User
//     .create({
//       image: encryptPath
//     });
//     res.write('NodeJS File Upload Success!');
//     res.end();
//   }
// );

app.get('/images', async (req, res) => {
  const images =  await User.findAll();

  return res.json({
    data: images
  });
});

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post("/image/upload",  async (req, res) => {
  // console.log(req.body);
  // return res.send('NodeJS File Upload Success!');
    await User
    .create({
      image: req.body.image
    });
    
    return res.redirect('/');
  }
);

// app.get('/file', (req, res) => {
//     let f = new encrypt.FileEncrypt('./upload/3e487b2622de5180f01130877ca796bca66a73a3.crypt');
//     f.openSourceFile();
//     f.decrypt('111111');
//     console.log("decrypt sync done");
// })
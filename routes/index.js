const { log } = require('console');
var express = require('express');
var router = express.Router();
const fs = require("fs");
const { type } = require('os');

/* GET home page. */
router.get('/', function(req, res) {
  fs.readdir('./newfile', {withFileTypes:true}, function(err,elem){
    res.render('index',{elem})
    // console.log(elem);
  })
});

router.get('/file/:filename',function(req,res){
  fs.readdir('./newfile',{withFileTypes:true},function(err,elem){
    res.render('opened',{elem});
  })
})
router.get('/delete/:type/:fileName', function(req,res){
  if(req.params.type === "folder"){
    fs.rmdir(`./newfile/${req.params.fileName}`, function(err){
      // console.log(`${req.query.folderName}`)
      res.redirect("back")
    })
  }
  else {
    fs.unlink(`./newfile/${req.params.fileName}`, function(err){
      res.redirect("back")
    })
  }
 
})



router.get('/createFile',function(req,res){
 fs.writeFile(`./newfile/${req.query.fileName}`," ",function(err){
   if(err) res.send('error')
   else res.redirect('back')
})
});

router.get('/createFolder',function(req,res){
fs.mkdir(`./newfile/${req.query.folderName}`,{recursive:true },function(err){
  if(err) res.send("error ")
  else res.redirect('back')
})
})


module.exports = router;

var fs = require('fs');
var watch = require('watch')
var path = require('path')
var dir = path.resolve(__dirname,'../','copy-react-cinema/')
var fileList = {};
watch.createMonitor('./app', function (monitor) {
  monitor.files['./app'] // Stat object for my zshrc.
  monitor.on("created", function (f, stat) {

    fileList[f] = stat.mtime
    console.log(stat)
    main(f)
  })
  monitor.on("changed", function (f, curr, prev) {
    console.log(curr)
    fileList[f] = curr.mtime
    main(f)
  })
})

function main(f){
  fs.open(__dirname+'/'+f, 'r', function(err, fd) {
    if (err) { throw err }
    fs.readFile(fd,'utf-8', function(err,data){
      if(err){ throw err}
       mkdirsSync(dir+"/"+ path.dirname(f) )
       fs.open(dir+"/"+ f, 'w+', function(err, fd) {
         if (err) { throw err }
         fs.write(fd,data,'utf-8',function(err){
           if (err) { throw err }
           fs.close(fd)
         })
       });
      fs.close(fd)

    })
  });
}

function mkdirsSync(dirpath, mode) {
  console.log(dirpath+'       enter')
    if (!fs.existsSync(dirpath)) {
        var pathtmp = '/';
        var list = dirpath.split(path.sep)
        list.shift()
        console.log(list+'      ====list')
        list.forEach(function(dirname) {
          if(dirname){
              if (pathtmp!='/') {
                  pathtmp = path.join(pathtmp, dirname);
              }
              else {
                  pathtmp = '/'+dirname;
              }
              if (!fs.existsSync(pathtmp)) {
                  if (!fs.mkdirSync(pathtmp, 0777)) {
                      return false;
                  }
              }
          }
        });
    }
    return true;
}

setInterval(intervalDelete,1000 * 60 * 60)

function intervalDelete(){
  // console.log(fileList)
  var time = new Date((new Date()).valueOf()-24 * 60 * 60 * 1000)
  for(var obj in fileList){
    if( time > fileList[obj]){
      fs.unlink(dir + '/' + obj)
      delete fileList[obj]
    }
  }
}

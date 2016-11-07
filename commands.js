var fs = require('fs');

module.exports = {
  which : function(data) {
    process.stdout.write('prompt > ');

    process.stdin.on('data', function (data) {
       var cmd = data.toString().trim();
         if (cmd === 'pwd') {
           this.pwd();
         }
         if (cmd === 'ls') {
           this.ls();
         }
    }.bind(module.exports));


  },
  pwd: function() {
    process.stdout.write('prompt > ')

    process.stdout.write(`${process.cwd().trim()}`)
        //  console.log(process.cwd().trim());
    process.stdout.write('prompt > ')

  },

  ls : function() {
    process.stdout.write('prompt > ')

   fs.readdir('.', function(err, files) {
     if (err) {
       throw err;
     }
     files.forEach(function(file) {
     process.stdout.write(file.toString() + "\n");
     });
   });

   process.stdout.write('prompt > ')

  }

};
  // date : function () {
  //   var todaysDate = new Date();
  //
  //   process.stdout.write('prompt > ');
  //   process.stdin.on('data', function (data) {
  //      var cmd = data.toString().trim();
  //
  //   console.log(todaysDate.toUTCString().trim()) ;
  //   process.stdout.write('\nprompt > ')
  //   });
  // }

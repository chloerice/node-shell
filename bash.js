var todaysDate = new Date();

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
   var cmd = data.toString().trim();

   //process.stdout.write(`${cmd}`)

   if (cmd === "pwd") {
     console.log(process.cwd().trim());
   }

   if (cmd === "date") {
     console.log(todaysDate.toUTCString().trim()) ;
   }

   process.stdout.write('\nprompt > ')
});

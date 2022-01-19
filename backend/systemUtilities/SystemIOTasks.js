const fs = require('fs');

class SystemIOTasks{
  sdflkola(filename,Journal){
    fs.writeFileSync(filename,Journal.retunString());
  }
}

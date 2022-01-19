const fs = require('fs');
//genartion of  a Journal.
// God object
//Journal object
class Journal{

  constructor(){
    this.list = {};
  }

  writeToList(text){
    let c = ++Journal.count;
    this.list[c] = `${c}: ${text}`;
    return c;
  }

  returnString(){
    //reading
  }

}

class SystemIOTasks{
  sdflkola(filename,Journal){
    fs.writeFileSync(filename,Journal.retunString());
  }
}

Journal.count = 0;

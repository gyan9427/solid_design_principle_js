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

defaut export Journal;

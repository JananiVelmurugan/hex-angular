class Food {
  id: number;
  name:string;
  type:string;

  
  constructor(private _id: number,  private _name: string) {
  }
  printFood(){
    console.log(this._id);
    console.log(this._name);
  }

  set type(type:string){
    this.type = type;
  }

  get type(){
    return this.type;
  }



}

let obj = new Food(1,"Idli");
obj.printFood();


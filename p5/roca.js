class Roca extends GameObject{
 constructor(x,y){
   super(x,y);
 }
  show(){
    image(rocaimg,this.corX,this.corY);
  }
}

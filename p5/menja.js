class Menja extends GameObject{
 constructor(x,y){
   super(x,y);
 }
  show(){
    image(menjaimg,this.corX,this.corY);
  }
}

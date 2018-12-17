var punts = 0;
var vides = 3;
class Pacman extends GameObject{
 constructor(x,y){
   super(x,y);
   this.frame = 0;
   this.direcio = 2;
   this.vides = 3;
   this.punts = 0;

 }
  show(){
    image(pacmanimg,this.corX,this.corY,IMGSIZES,IMGSIZES,IMGSIZES*this.frame,IMGSIZES*this.direcio,IMGSIZES,IMGSIZES);
    this.frame++;
    if(this.frame==5)this.frame=0;
  }
  moureDreta(){
    if(this.corX==256){

    }else{
      this.direcio = 0;
      this.corX += 32;
    }
  }
  moureEsquerra(){
    if(this.corX==32){

    }else{
      this.direcio = 2;
      this.corX -= 32;
    }
  }
  moureBaix(){
    if(this.corY==256){

    }else{
      this.direcio = 1;
      this.corY += 32;
    }
  }
  moureAmunt(){
    if(this.corY==32){

    }else{
      this.direcio = 3;
      this.corY -= 32;
    }
  }
  menjarMenjar(menjar){
    var distancia = dist(this.corX,this.corY,menjar.corX,menjar.corY);
    if(distancia < 16){
      punts ++;
      return true;
    }
  }
  menjarRaim(raim){
    var distancia = dist(this.corX,this.corY,raim.corX,raim.corY);
    if(distancia < 16){
      punts = punts + 25;
      return true;
    }
  }
  menjarPedra(pedra){
    var distancia = dist(this.corX,this.corY,pedra.corX,pedra.corY);
    if(distancia < 16){
      vides--;
      if(vides==2){
        alert("HAS PERDUT UNA VIDA");
      }
      if(vides==1){
        alert("HAS PERDUT UNA VIDA");
      }
      if(vides==0){
        alert("HAS PERDUT!!");
        location.reload();
      }
      return true;
    }
  }
}

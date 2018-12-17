var rocaimg;
var menjaimg;
var raimimg;
var pacmanimg;
var i;
var j;
var n;
var mymaze;
var mypacman;
var pedres = [];
var menjas = [];
var raims = [];
var pacmans= [];

function preload(){
  rocaimg = loadImage("./images/roca.bmp");
  menjaimg = loadImage("./images/food.png");
  raimimg = loadImage("./images/grape.png");
  pacmanimg = loadImage("./images/pac.png");
}

function setup() {
  mymaze=new Maze();
  mypacman = new Pacman(4*32,7*32);
  createCanvas(mymaze.mycolumns*mymaze.size,mymaze.myrows*mymaze.size+70);
  for(i = 0; i < mymaze.myrows; i++ ){
    for(j = 0; j < mymaze.mycolumns; j++ ){
      if(mymaze.mapa[i][j]==1){
        pedres.push(new Roca(j*32,i*32));

      }
    }
  }

  for(i = 0; i < mymaze.myrows; i++ ){
    for(j = 0; j < mymaze.mycolumns; j++ ){
      if(mymaze.mapa[i][j]==0){
        menjas.push(new Menja(j*32,i*32));

      }
    }
  }

  for(i = 0; i < mymaze.myrows; i++ ){
    for(j = 0; j < mymaze.mycolumns; j++ ){
      if(mymaze.mapa[i][j]==3){
        raims.push(new Raim(j*32,i*32));

      }
    }
  }



}




function draw() {
  background(0);
  for(n = 0; n < pedres.length; n++ ){
      pedres[n].show();
  }
  for(n = 0; n < menjas.length; n++ ){
      menjas[n].show();
  }
  for(n = 0; n < raims.length; n++ ){
      raims[n].show();
  }

  mypacman.show();

  for(i=0;i<menjas.length;i++){
    if(mypacman.menjarMenjar(menjas[i])){
      menjas.splice(i, 1);
    }
  }
  for(i=0;i<raims.length;i++){
    if(mypacman.menjarRaim(raims[i])){
      raims.splice(i, 1);
    }
  }
  for(i=0;i<pedres.length;i++){
    if(mypacman.menjarPedra(pedres[i])){
      pedres.splice(i, 1);
    }
  }

  if(menjas.length==0 & raims.length==0){
    alert("HAS GUANYAT: "+punts+" punts");
    location.reload();
  }

  var puntatge = "Punts = "+ punts;

  fill(255);
  textSize(15);
  textStyle(NORMAL);
  text(puntatge,10,350);

  var videes = "Vides = "+ vides;

  fill(255);
  textSize(15);
  textStyle(NORMAL);
  text(videes,10,370);

}

function keyPressed(){
  if(keyCode == RIGHT_ARROW){
    mypacman.moureDreta();
  }
  if(keyCode == LEFT_ARROW){
    mypacman.moureEsquerra();
  }
  if(keyCode == UP_ARROW){
    mypacman.moureAmunt();
  }
  if(keyCode == DOWN_ARROW){
    mypacman.moureBaix();
  }
}

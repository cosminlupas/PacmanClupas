const ROWS=10;
const COLUMNS=10;
const IMGSIZES=32;

class Maze{
    constructor(){
      this.myrows=ROWS;
      this.size=IMGSIZES;
      this.mycolumns=COLUMNS;
      this.mapa=[[1,1,1,1,1,1,1,1,1,1],
                  [1,0,0,0,0,0,0,0,3,1],
                  [1,0,1,0,1,1,0,1,0,1],
                  [1,0,1,0,0,0,0,1,0,1],
                  [1,0,1,0,1,1,0,1,0,1],
                  [1,0,1,0,3,0,0,1,0,1],
                  [1,0,3,1,1,1,1,3,0,1],
                  [1,0,1,0,2,0,0,1,0,1],
                  [1,3,0,0,1,1,0,0,0,1],
                  [1,1,1,1,1,1,1,1,1,1]
                ];
    }
}

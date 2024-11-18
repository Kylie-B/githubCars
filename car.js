class Car{


    constructor ( tempC,  tempXpos,  tempYpos,  tempXspeed, tempxdegree) {
      this.c = tempC;
      this.xpos = tempXpos;
      this.ypos = tempYpos;
      this.xspeed = tempXspeed;
      this.xdegree = tempxdegree;
    }
    
    
     display(){
      push();
     stroke(0);
     fill(this.c);
     translate(this.xpos,this.ypos);
     rotate(radians(this.xdegree));
     rectMode(CENTER);
     rect(0, 0, 30, 10);
     pop();
    }
    
     drive() {
      this.xpos = this.xpos + this.xspeed;
      if(this.xpos > width) {
        this.xpos = 0;
      }
    }
    flip(){
        this.xdegree ++;
      }
      }
class Dot {
   constructor(moves) {
      this.x = 400;
      this.y = 400;
      this.i = 0;
      this.brain = new Brain(moves);
   }

   show() {
      let c = color(80, 80, 80);
      fill(c);
      noStroke();
      ellipse(this.x, this.y, 10, 10);
   }

   move() {
      let direction = this.brain.getDirection[i];
      this.i++;

      switch (direction) {
         case 1:
            this.x = this.x + 10;
            break;
         case 2:
            this.x = this.x + 10;
            this.y = this.y + 10;
            break;
         case 3:
            this.y = this.y + 10;
            break;
         case 4:
            this.x = this.x - 10;
            this.y = this.y + 10;
            break;
         case 5:
            this.x = this.x - 10;
            break;
         case 6:
            this.x = this.x - 10;
            this.y = this.y - 10;
            break;
         case 7:
            this.y = this.y - 10;
            break;
         case 8:
            this.x = this.x + 10;
            this.y = this.y - 10;
            break;           
      }
   }
}
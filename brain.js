class Brain {
   constructor(moves) {
      this.direction = [];
      for (i = 0; i <= moves; i++) {
         this.direction.push(Math.floor((Math.random() * 8) + 1));
      }
   }

   getDirection(i) {
      return this.direction[i];
   }
}
var dots = []
var movesPerGeneration = 100;
var populationSize = 10;
var move = 0;
var generation = 1;

function setup() {
   createCanvas(800, 800);
   frameRate(100);

   for (i = 0; i <= populationSize; i++) {
      dots.push(new Dot(movesPerGeneration));
   }
}

function draw() {
   
   if (move <= movesPerGeneration) {
      background(240);
      dots.forEach(dot => {
         dot.move();
         dot.show();
      });
      move++;
   }
   else {
      generation++;
      dots.splice(0);
      for (i = 0; i <= populationSize; i++) {
         dots.push(new Dot());
      }
      move = 0;
   }

}

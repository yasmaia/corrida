function setup(){
    createCanvas(400, 400);
  }
  
  let xJogador1 = 5;
  let xJogador2 = 5;
  
  function draw() {
    fill("blue")
    background("pink");
    textSize(40);
    text("🤠", xJogador1, 100);
    text("🥸", xJogador2, 300);
    rect(350, 0, 10, 400);
    xJogador1 += random(5);
    xJogador2 += random(5);
    
  }
//Pol López i Anna Canivell

x = 0;
y = 0;
function setup() {
  createCanvas(525, 700);
  background(231,234,85);      
 
}


function draw() {
  
   //POSEM EL TEXT I LA FONT
  textFont("Doppio One");
  fill(0);
  textSize(45);
  text("BAUHAUS",50, 660);
  fill (255);
  fill(0);
  textSize(25);
  text("AUSSTELLUNG",280, 645);
  fill (255);
  fill(0);
  textSize(25);
  text("JULI, AUGUST, SEPTEMBER",50, 685);
  fill (255);
  fill(0);
  textSize(45);
  text("1923",375, 685);
  fill (255);

  
  if(mouseIsPressed){
    let randR = random(255);
    let randG = random(255);
    let randB = random(255);
    fill(randR,randG,randB);
   
    }
    if(x>=30 && y<=-30){
      background(231,234,85);
      x=0;
      y=0;
    }else{
      x= x + 0.3;
      y= y - 0.3;
      translate(x,y);
    }
    
    console.log(x,y);
    
    
  //1ª FILA DE CUBS
  square(50,100,100);
  //fill(255,0,0);
  
  //fill(0,255,0);
  square(200,100,100);

  //fill(0,0,255);
  square(350,100,100);
  
  
  //2nª FILA DE CUBS
  
  //fill(255,0,0);
  square(50,300,100);

  //fill(0,255,0);
  square(200,300,100);

  //fill(0,0,255);
  square(350,300,100);
  
  //3rª FILA DE CUBS
  
  //fill(255,0,0);
  square(50,500,100);

  //fill(0,255,0);
  square(200,500,100);

  //fill(0,0,255);
  square(350,500,100);
 
 
}
//function mousePressed(){
  
 
  // esto hace algo si le das al ratón
//}

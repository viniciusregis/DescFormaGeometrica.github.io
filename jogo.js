//atribuições
//foto fundo das fases <a href='https://br.freepik.com/fotos-vetores-gratis/fundo'>Fundo vetor criado por renata.s - br.freepik.com</a>
// <a href="https://pt.lovepik.com/images/joy.html">Png vectors created by LovePik User(ID:42824061) - lovepik.com</a>
//<a href="https://pt.lovepik.com/images/happy-child.html">Png vectors created by 小千库 - lovepik.com</a>

var tela =1;
var resposta = 0;
var pontos= 0;
var fase = 1;
var erros = 0;

//__________menu___________________
var largura =200;var altura  = 55;
var xmenu =300; var ymenu1 = 180;
var ymenu2 =285; var ymenu3 = 385;
var voltar = 570; var voltar2 =500;
//__________sair___________________
var sair = 640; var sair2 =500;
var alturav = 50; var largurav = 150;
var larguraop = 120; var alturaop = 50;
var larguraop2 = 120; var alturaop2 = 50;
//_______opçoes_____________________
var op = 480;      var op1 = 200; 
var op2_2 = 550;   var op2 = 270;
                   var op3 = 340; 
                   var op4 = 410;
//______________fase4__________
var x = 600;  var x2 = 435;
var y = 240;  var y2 = 450;
var x3 =80; var y3=400;


function preload() {
  myFont = loadFont('old.ttf');
  img = loadImage('vinicius.jpg');
    img2 = loadImage('neidinha.jpg');
   img3 = loadImage('cone.png');
    img4 = loadImage('fundomenu.png');
  img5 = loadImage('triste.png');
    img6 = loadImage('501.jpg');
  triangulo = loadImage('triangulo.png');
  bola = loadImage('bola.png');
    celular = loadImage('smartphone.png')
   feliz = loadImage('feliz.png')
   feliz2 = loadImage('feliz2.png')
}


function setup() {
  createCanvas(800, 600);
  
}

function draw() {
background("#ffff80");  
if(tela==1){
menu();
}else if(tela==2){
fase1();
}else if (tela==3){
instruçoes();
}else if(tela==4){
creditos();
}else if(tela==6){
acertou();
}else if(tela==7){
errou();       
}else if(tela==8){
fase2();
}else if(tela==9){
fase3();
}else if (tela==10){
fase4();
}else if(tela==11){
fase5();         
}else if(tela==12){
final();          
} 
  
  

}

function instruçoes(){
  background(img4);
  textAlign(CENTER);
   textSize(30);
    text("Instruções",400,60);
  fill("#fffff");
  stroke("#cc6600");
  rect(15,90,760,300,20);
 stroke("#999966");
    fill("#999966");
     rect(voltar,voltar2,largurav,alturav,10);
     textAlign(LEFT);
     textSize(20);
     textFont('georgia');
   fill("#000000");
   text("      jogo educativo para alunos do 5º Ano do Ensino fundamental.",30,130);
   text("      Matéria: matemática ( Associar figuras espaciais a suas planificações (prismas,",30,180);
  textAlign(LEFT);
   text("pirâmides, cilindros e cones) e analisar, nomear e comparar seus atributos).",30,205);
    text("     Ao iniciar o jogo, você terá que descobrir qual as formas geométricas das figuras\n apresentadas, cade acerto valerá pontos que vão variar de acordo com a dificuldade\n das peguntas, a partir da segunda fase cada erro diminuirá uma porcetagem dos\n seus pontos.No final do jogo será exibido o numero todal de pontos e de erros.",30,240);
  
     
   if(mouseX>voltar&& mouseX<voltar+largura && mouseY>voltar2 && mouseY<voltar2+altura){ 
  
    
   fill("#4d4d33");
  stroke("#3d3d29");
    fill("#3d3d29");
    rect(voltar,voltar2,largurav,alturav,10);

  if(mouseIsPressed){
     tela=1;
      }
}
  textAlign(CENTER);
  textSize(26);
  textFont(myFont,26);
  fill("#000000");
    text("Voltar",642,532);
 }
 function creditos(){
   background(img4);
   textAlign(CENTER);
   textSize(30);
    text("Créditos",400,50);
   
     fill("#fffff");
    stroke("#cc6600");
  rect(20,80,760,400,20);

 stroke("#999966");
    fill("#999966");
       rect(voltar,voltar2,largurav,alturav,10);
    textFont('georgia',18);    
image(img, 100, 100,200,297); 
image(img2, 500, 100,200,300);
      fill("#000000");
    text("Programador: Vinicius Regis Santos Alves.",198,450);
    text("Educadora: Erivoneide Cosme dos Santos.",595,450);
       
    if(mouseX>voltar&& mouseX<voltar+largura && mouseY>voltar2 && mouseY<voltar2+altura){   
   fill("#4d4d33");
  stroke("#3d3d29");
    fill("#3d3d29");
    rect(voltar,voltar2,largurav,alturav,10);

  if(mouseIsPressed){
     tela=1;
      }
}
  textAlign(CENTER);
  
  textFont(myFont,26);
  fill("#000000");
    text("Voltar",642,533);
    
  }
function menu(){
background(img4);
 textStyle(NORMAL);
 
  textAlign(CENTER);
  textSize(26);
  textFont(myFont);
  
   fill("#fffff");
  stroke("#cc6600");
  rect(150,60,500,60,20);
    
//-------------------------------------------------------------------------    
   fill("#000000");
text("Descubra a forma geométrica!",400,100)
     if(mouseX>xmenu&& mouseX<xmenu+largura && mouseY>ymenu1 && mouseY<ymenu1+altura){  
    
        stroke("#aaaa55");
        fill("#aaaa55");
        rect(xmenu,ymenu1,largura,altura,10);
      
 
      if(mouseIsPressed){
     tela=2;
          
      }  
    }
    
   fill("#000000");
    text("Iniciar jogo",400,215);
//-------------------------------------------------------------------------------        
if(mouseX>xmenu&& mouseX<xmenu+largura && mouseY>ymenu2 && mouseY<ymenu2+altura){ 
  
    stroke("#aaaa55");
    fill("#aaaa55");
    rect(xmenu,ymenu2,largura,altura,10);
  
   
   
  if(mouseIsPressed){
     tela=3;
      }
}
     
   fill("#000000"); 
 text("Instruções",400,320);
 //------------------------------------------------------------------------------- 
if(mouseX>xmenu&& mouseX<xmenu+largura && mouseY>ymenu3 && mouseY<ymenu3+altura){ 
  
     stroke("#aaaa55");
    fill("#aaaa55");
    rect(xmenu,ymenu3,largura,altura,10);
  
   
   
  if(mouseIsPressed){
     tela=4;
      }
}
 fill("#000000"); 
 text("Créditos",400,420); 
  

  



  
}
function acertou(){
 background(img6);
 if (fase==1){
 fill("#fffff");
    stroke("#cc6600");
  rect(250,170,520,200,20);
   image(img3,5,80,330,480);
 textSize(30); 
fill("#000000");
stroke("#000000"); 
text("Reposta correta!",400,100) ;
textSize(20);
textAlign(LEFT);
text("    A figura ao lado é um cone de trânsito, que é\n usado para sinalizar marcações de lugares como\n estacionamento  e obras.",270,220);  

//________________topo_______________________________  
  stroke("#999966");
    fill("#999966");
    rect(sair,sair2,100,alturav,10);
  
   stroke("#999966");
    fill("#999966");
    rect(100,sair2,200,alturav,10);
//_______________________sair___________________________
if(mouseX>sair&& mouseX<sair+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#cc0000");
  stroke("#cc0000");
    fill("#cc0000");
    rect(sair,sair2,100,alturav,10);

  if(mouseIsPressed){
     tela=1;
      }
}
 

  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Sair",690,532);   
//________________________________proxima fase_______________________________________  
  
  if(mouseX>100&& mouseX<200+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#00ff00");
  stroke("#00ff00");
  fill("#00ff00");
  rect(100,sair2,200,alturav,10);

  if(mouseIsPressed){
    tela=8;
    fase=2;
      }
} 
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("proxima fase",200,532);     
//____________________________FASE2________________________  

 
 
 
 }else if(fase==2){
image(feliz2,250,150,300,350);
 textSize(30); 
fill("#000000");
stroke("#000000"); 
text("Reposta correta!",400,100) ;

//________________topo_______________________________  
  stroke("#999966");
    fill("#999966");
    rect(sair,sair2,100,alturav,10);
  
   stroke("#999966");
    fill("#999966");
    rect(100,sair2,200,alturav,10);
//_______________________sair___________________________
if(mouseX>sair&& mouseX<sair+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#cc0000");
  stroke("#cc0000");
    fill("#cc0000");
    rect(sair,sair2,100,alturav,10);

  if(mouseIsPressed){
     tela=1;
      }
}
 

  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("Sair",690,532);   
//________________________________proximafase______________________________________
  
  if(mouseX>100&& mouseX<200+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#00ff00");
  stroke("#00ff00");
  fill("#00ff00");
  rect(100,sair2,200,alturav,10);

  if(mouseIsPressed){
    tela=9;
    fase=3;
    
      }
}
 
  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("proxima fase",200,532);      
//____________________________fase3________________
 }
  else if(fase==3){
image(feliz2,250,150,300,350);
 textSize(30); 
fill("#000000");
stroke("#000000"); 
text("Reposta correta!",400,100) ;

//________________topo_______________________________  
  stroke("#999966");
    fill("#999966");
    rect(sair,sair2,100,alturav,10);
  
   stroke("#999966");
    fill("#999966");
    rect(100,sair2,200,alturav,10);
//_______________________sair___________________________
if(mouseX>sair&& mouseX<sair+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#cc0000");
  stroke("#cc0000");
    fill("#cc0000");
    rect(sair,sair2,100,alturav,10);

  if(mouseIsPressed){
     tela=1;
      }
}
 

  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("Sair",690,532);   
//________________________________proxima fase_______________________________________  
  
  if(mouseX>100&& mouseX<200+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#00ff00");
  stroke("#00ff00");
  fill("#00ff00");
  rect(100,sair2,200,alturav,10);

  if(mouseIsPressed){
    tela=10;
    fase=4;
      }
}
 
  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("proxima fase",200,532);      

  

  
  }
  else if(fase==4){
    image(feliz2,250,150,300,350);
 textSize(30); 
fill("#000000");
stroke("#000000"); 
text("Reposta correta!",400,100) ;

//________________topo_______________________________  
  stroke("#999966");
    fill("#999966");
    rect(sair,sair2,100,alturav,10);
  
   stroke("#999966");
    fill("#999966");
    rect(100,sair2,200,alturav,10);
//_______________________sair___________________________
if(mouseX>sair&& mouseX<sair+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#cc0000");
  stroke("#cc0000");
    fill("#cc0000");
    rect(sair,sair2,100,alturav,10);

  if(mouseIsPressed){
     tela=1;
      }
}
 

  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("Sair",690,532);   
//________________________________proximafase_______________________________________  
  
  if(mouseX>100&& mouseX<200+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#00ff00");
  stroke("#00ff00");
  fill("#00ff00");
  rect(100,sair2,200,alturav,10);

  if(mouseIsPressed){
    tela=11;
    fase =5
      }
}
 
  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("proxima fase",200,532);
}
}
function errou(){
 background(img6);
  if(fase==1){
  
    fill("#fffff");
    stroke("#cc6600");
  rect(270,170,400,50,20);
  
  image(img3,20,70,330,480);
  
  image(img5,450,150,300,350);
textFont(myFont,30)
  textAlign(CENTER);
  fill("#000000");
 text("Resposta errada!",400,100);
  if(resposta==1){
    textSize(20);
    textAlign("LEFT");
     text("A figura ao lado não é um triângulo.",300,200);
     }
  if(resposta==2){
    textSize(20);
    textAlign("LEFT");
     text("A figura ao lado não é um retângulo.",300,200);
     }
  if(resposta==4){
    textSize(20);
    textAlign("LEFT");
     text("A figura ao lado não é uma esfera.",300,200);
    
  }
  //___________________topo________________________________
    stroke("#999966");
    fill("#999966");
    rect(sair,sair2,100,alturav,10);
  
   stroke("#999966");
    fill("#999966");
    rect(100,sair2,240,alturav,10);
//_______________________sair___________________________
if(mouseX>sair&& mouseX<sair+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#cc0000");
  stroke("#cc0000");
    fill("#cc0000");
    rect(sair,sair2,100,alturav,10);

  if(mouseIsPressed){
     tela=1;
      }
}
 

  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("Sair",690,532);   
//________________________________tentar dnv_______________________________________  
  if(mouseX>100&& mouseX<200+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#00ff00");
  stroke("#00ff00");
  fill("#00ff00");
  rect(100,sair2,240,alturav,10);

  if(mouseIsPressed){
     tela=2;
    
      }

} 
  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("tentar novamente",220,532);   
//___________________________fase 2_____________________________

 
  
  
  
  }else if(fase==2){
     fill("#fffff");
    stroke("#cc6600");
  rect(270,170,400,50,20);
  image(triangulo,100,200,300,300);

  image(img5,450,150,300,350);
textFont(myFont,30)
  textAlign(CENTER);
  fill("#000000");
 text("Resposta errada!",400,100);
 
  if(resposta==1){
    textSize(20);
    textAlign("LEFT");
     text("A figura ao lado não é uma pirâmide.",290,200);
     }
  if(resposta==3){
    textSize(20);
    textAlign("LEFT");
     text("A figura ao lado não é um Cone.",300,200);
     }
  if(resposta==4){
    textSize(20);
    textAlign("LEFT");
     text("A figura ao lado não é uma elipse.",300,200);
    
  }
  //___________________topo________________________________
    stroke("#999966");
    fill("#999966");
    rect(sair,sair2,100,alturav,10);
  
   stroke("#999966");
    fill("#999966");
    rect(100,sair2,240,alturav,10);
//_______________________sair___________________________
if(mouseX>sair&& mouseX<sair+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#cc0000");
  stroke("#cc0000");
    fill("#cc0000");
    rect(sair,sair2,100,alturav,10);

  if(mouseIsPressed){
     tela=1;
      }
}
 

  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("Sair",690,532);   
//________________________________tentar dnv_______________________________________  
  if(mouseX>100&& mouseX<200+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#00ff00");
  stroke("#00ff00");
  fill("#00ff00");
  rect(100,sair2,240,alturav,10);

  if(mouseIsPressed){
     tela=8;
    
      }

} 
  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("tentar novamente",220,532);  

   
  
  
  
  }else if(fase==3){
     fill("#fffff");
    stroke("#cc6600");
  rect(150,170,600,50,20);
  image(triangulo,100,200,300,300);

  image(img5,450,150,300,350);
textFont(myFont,30)
  textAlign(CENTER);
  fill("#000000");
 text("Resposta errada!",400,100);
 
  if(resposta==1){
    textSize(20);
    textAlign("LEFT");
     text("A figura da pergunta anterior não tem apenas um lado.",180,200);
     }
  if(resposta==2){
    textSize(20);
    textAlign("LEFT");
     text("A figura da pergunta anterior não tem menos que 4 lados.",180,200);
     }
  if(resposta==3){
    textSize(20);
    textAlign("LEFT");
     text("A figura da pergunta anterior não tem apenas dois lados",180,200);
  }
  //___________________topo________________________________
    stroke("#999966");
    fill("#999966");
    rect(sair,sair2,100,alturav,10);
  
   stroke("#999966");
    fill("#999966");
    rect(100,sair2,240,alturav,10);
//_______________________sair___________________________
if(mouseX>sair&& mouseX<sair+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#cc0000");
  stroke("#cc0000");
    fill("#cc0000");
    rect(sair,sair2,100,alturav,10);

  if(mouseIsPressed){
     tela=1;
      }
}
 

  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("Sair",690,532);   
//________________________________tentar dnv_______________________________________  
  if(mouseX>100&& mouseX<200+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#00ff00");
  stroke("#00ff00");
  fill("#00ff00");
  rect(100,sair2,240,alturav,10);

  if(mouseIsPressed){
     tela=9;
    
      }

} 
  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("tentar novamente",220,532);  

  
  
  }else if(fase==4){
    fill("#fffff");
    stroke("#cc6600");
  rect(120,170,550,50,20);
image(img5,280,150,300,350);
textFont(myFont,30)
  textAlign(CENTER);
  fill("#000000");
 text("Resposta errada!",400,100);
 

  //___________________topo________________________________
    stroke("#999966");
    fill("#999966");
    rect(sair,sair2,100,alturav,10);
  
   stroke("#999966");
    fill("#999966");
    rect(100,sair2,240,alturav,10);
//_______________________sair___________________________
if(mouseX>sair&& mouseX<sair+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#cc0000");
  stroke("#cc0000");
    fill("#cc0000");
    rect(sair,sair2,100,alturav,10);

  if(mouseIsPressed){
     tela=1;
      }
}
 

  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("Sair",690,532);   
//________________________________tentar dnv_______________________________________  
  if(mouseX>100&& mouseX<200+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#00ff00");
  stroke("#00ff00");
  fill("#00ff00");
  rect(100,sair2,240,alturav,10);

  if(mouseIsPressed){
     tela=10;
    
      }

} 
  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("tentar novamente",220,532);  
//____________________________________respostas___________________
    if(resposta==1){
    text("A planificação da bola não é uma elipse.",400,200);
    }
     if(resposta==2){
    text("A planificação da bola não é um quadrado.",400,200);
    }
}else if (fase==5){
 fill("#fffff");
    stroke("#cc6600");
  rect(100,170,610,50,20);
image(img5,280,150,300,350);
textFont(myFont,30)
  textAlign(CENTER);
  fill("#000000");
 text("Resposta errada!",400,100);
 

  //___________________topo________________________________
    stroke("#999966");
    fill("#999966");
    rect(sair,sair2,100,alturav,10);
  
   stroke("#999966");
    fill("#999966");
    rect(100,sair2,240,alturav,10);
//_______________________sair___________________________
if(mouseX>sair&& mouseX<sair+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#cc0000");
  stroke("#cc0000");
    fill("#cc0000");
    rect(sair,sair2,100,alturav,10);

  if(mouseIsPressed){
     tela=1;
      }
}
 

  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("Sair",690,532);   
//________________________________tentar dnv_______________________________________  
  if(mouseX>100&& mouseX<200+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#00ff00");
  stroke("#00ff00");
  fill("#00ff00");
  rect(100,sair2,240,alturav,10);

  if(mouseIsPressed){
     tela=11;
    
      }

} 
  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("tentar novamente",220,532);  
//____________________________________respostas___________________
    if(resposta==3){
    text("A planificação do smartphone não tem 6 lados",405,200);
    }
     if(resposta==2){
    text("A planificação do smartphone não é um quadrado.",405,200);
    }
   if(resposta==4){
    text("A planificação do smartphone não é um quadrado.",405,200);
    }
}
  
}
function fase1(){
  background(img6);
//_________________topo______________________________________________
    stroke("#999966");
    fill("#999966");
    rect(sair,sair2,100,alturav,10);
  
    stroke("#ff751a");
    fill("#fffff");
    rect(op,op1,155,alturaop,30);
  
    stroke("#ff751a");
    fill("#fffff");
    rect(op2_2,op2,160,alturaop,30);
  
    stroke("#ff751a");
    fill("#fffff");
    rect(op,op3,100,alturaop,30);
  
    stroke("#ff751a");
    fill("#ffffdf");
    rect(op2_2,op4,larguraop,alturaop,30);
//__________________sair______________________________________________________
if(mouseX>sair&& mouseX<sair+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#cc0000");
  stroke("#cc0000");
    fill("#cc0000");
    rect(sair,sair2,100,alturav,10);

  if(mouseIsPressed){
tela=1;
      }
}
 

  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("Sair",690,532);  
    
   
//___________________topo2________________________________________
  stroke("#cc6600");
  fill("#ffff80")
  rect(10,10,100,40,10);
  rect(645,10,120,40,10);
  rect(230,110,535,45,10)
fill("#000000");
image(img3,20,70,330,480);
textFont(myFont,20);  
text("Figura 1",60,35); 
text("Pontos: "+pontos,700,35) ;  
textFont(myFont,24)
text("Qual a forma geométrica da figura ao lado?",500,140); 
//------------------------------opção1------------------------------------
     if(mouseX>op&& mouseX<op+155 && mouseY>op1 && mouseY<op1+alturaop){ 
  
       
   fill("#ff751a");
  stroke("#ff751a");
    fill("#ff751a");
    rect(op,op1,155,alturaop,30);

  if(mouseIsPressed){
     tela=7;
     resposta =1;
    erros = erros +1;
      }
}
  
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Triângulo",560,233);  
//------------------------------opção2------------------------------------
  if(mouseX>op2_2&& mouseX<op2_2+160 && mouseY>op2 && mouseY<op2+alturaop){ 
  
        
   fill("#ff751a");
  stroke("#ff751a");
    fill("#ff751a");
    rect(op2_2,op2,160,alturaop,30);

  if(mouseIsPressed){
     tela=7;
     resposta=2;
     erros = erros +1;
      }
}
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Retângulo",630,303); 
//------------------------------opção3------------------------------------
if(mouseX>op&& mouseX<op+100 && mouseY>op3 && mouseY<op3+alturaop){ 
  
    
   fill("#ff751a");
  stroke("#ff751a");
    fill("#ff751a");
    rect(op,op3,100,alturaop,30);

  if(mouseIsPressed){
     tela=6;
     resposta =3;
    pontos = pontos + 10;
      }
}
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Cone",530,373);
  //------------------------------opção4------------------------------------
  if(mouseX>op2_2&& mouseX<op2_2+larguraop && mouseY>op4 && mouseY<op4+alturaop){ 
  
        
   fill("#ff751a");
  stroke("#ff751a");
    fill("#ff751a");
    rect(op2_2,op4,larguraop,alturaop,30);

  if(mouseIsPressed){
     tela=7;
     resposta=4;
     erros = erros +1;
      }
}
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Esfera",610,442);
}
function fase2(){
   background(img6);
  image(triangulo,100,200,300,300);
//_________________topo______________________________________________
    stroke("#999966");
    fill("#999966");
    rect(sair,sair2,100,alturav,10);
  
    stroke("#ff751a");
    fill("#fffff");
    rect(op,op1,155,alturaop,30);
  
    stroke("#ff751a");
    fill("#fffff");
    rect(op2_2,op2,160,alturaop,30);
  
    stroke("#ff751a");
    fill("#fffff");
    rect(op,op3,100,alturaop,30);
  
    stroke("#ff751a");
    fill("#ffffdf");
    rect(op2_2,op4,larguraop,alturaop,30);
//__________________sair______________________________________________________
if(mouseX>sair&& mouseX<sair+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#cc0000");
  stroke("#cc0000");
    fill("#cc0000");
    rect(sair,sair2,100,alturav,10);

  if(mouseIsPressed){
     tela=1;
      }
}
 

  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("Sair",690,532);  
    
   
//___________________topo2________________________________________
  stroke("#cc6600");
  fill("#ffff80")
  rect(10,10,100,40,10);
  rect(645,10,120,40,10);
  rect(230,110,535,45,10)
fill("#000000");
textFont(myFont,20);  
text("Figura 2",60,35); 
text("Pontos: "+pontos,700,35) ;  
textFont(myFont,24)
text("Qual a forma geométrica da figura ao lado?",500,140); 
//------------------------------opção1------------------------------------
     if(mouseX>op&& mouseX<op+155 && mouseY>op1 && mouseY<op1+alturaop){ 
  
       
   fill("#ff751a");
  stroke("#ff751a");
    fill("#ff751a");
    rect(op,op1,155,alturaop,30);

  if(mouseIsPressed){
     tela=7;
     resposta =1;
    pontos= pontos-5;
     erros = erros +1;
      }
}
  
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Pirâmide",560,233);  
//------------------------------opção2------------------------------------
  if(mouseX>op2_2&& mouseX<op2_2+160 && mouseY>op2 && mouseY<op2+alturaop){ 
  
        
   fill("#ff751a");
  stroke("#ff751a");
    fill("#ff751a");
    rect(op2_2,op2,160,alturaop,30);

  if(mouseIsPressed){
    tela=6;
    resposta=3;
    fase=2;
    pontos = pontos +10;
      }
}
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Triângulo",630,303); 
//------------------------------opção3------------------------------------
if(mouseX>op&& mouseX<op+100 && mouseY>op3 && mouseY<op3+alturaop){ 
  
    
   fill("#ff751a");
  stroke("#ff751a");
    fill("#ff751a");
    rect(op,op3,100,alturaop,30);

  if(mouseIsPressed){
     tela=7;
    resposta =3;
    pontos= pontos-5;
     erros = erros +1;
      }
}
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Cone",530,373);
  //------------------------------opção4------------------------------------
  if(mouseX>op2_2&& mouseX<op2_2+larguraop && mouseY>op4 && mouseY<op4+alturaop){ 
  
        
   fill("#ff751a");
  stroke("#ff751a");
    fill("#ff751a");
    rect(op2_2,op4,larguraop,alturaop,30);

  if(mouseIsPressed){
     tela=7;
     resposta=4;
    pontos= pontos-5;
     erros = erros +1;
      }
}
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Elipse",610,442);

}
function fase3(){
   background(img6);
  image(triangulo,100,200,300,300);
//_________________topo______________________________________________
    stroke("#999966");
    fill("#999966");
    rect(sair,sair2,100,alturav,10);
  
    stroke("#ff751a");
    fill("#fffff");
    rect(op,op1,155,alturaop,30);
  
    stroke("#ff751a");
    fill("#fffff");
    rect(op2_2,op2,180,alturaop,30);
  
    stroke("#ff751a");
    fill("#fffff");
    rect(op,op3,150,alturaop,30);
  
    stroke("#ff751a");
    fill("#ffffdf");
    rect(op2_2,op4,150,alturaop,30);
//__________________sair______________________________________________________
if(mouseX>sair&& mouseX<sair+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#cc0000");
  stroke("#cc0000");
    fill("#cc0000");
    rect(sair,sair2,100,alturav,10);

  if(mouseIsPressed){
     tela=1;
      }
}
 

  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("Sair",690,532);  
    
   
//___________________topo2________________________________________
  stroke("#cc6600");
  fill("#ffff80")
  rect(10,10,100,40,10);
  rect(645,10,120,40,10);
  rect(200,110,590,45,10)
fill("#000000");
textFont(myFont,20);  
text("Figura 4",60,35); 
text("Pontos: "+pontos,700,35) ;  
textFont(myFont,24)
text("Quantos lados tem a figura da pergunta anterior?",500,140); 
//------------------------------opção1------------------------------------
     if(mouseX>op&& mouseX<op+155 && mouseY>op1 && mouseY<op1+alturaop){ 
  
       
   fill("#ff751a");
  stroke("#ff751a");
    fill("#ff751a");
    rect(op,op1,155,alturaop,30);

  if(mouseIsPressed){
     tela=7;
     resposta =1;
    pontos= pontos-5;
     erros = erros +1;
      }
}
  
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Um lado",560,233);  
//------------------------------opção2------------------------------------
  if(mouseX>op2_2&& mouseX<op2_2+180 && mouseY>op2 && mouseY<op2+alturaop){ 
  
        
   fill("#ff751a");
  stroke("#ff751a");
    fill("#ff751a");
    rect(op2_2,op2,180,alturaop,30);

  if(mouseIsPressed){
    tela=7;
    resposta=2;
    pontos= pontos-5;
     erros = erros +1;
      }
}
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Quatro lados",640,303); 
//------------------------------opção3------------------------------------
if(mouseX>op&& mouseX<op+150 && mouseY>op3 && mouseY<op3+alturaop){ 
  
    
   fill("#ff751a");
  stroke("#ff751a");
    fill("#ff751a");
    rect(op,op3,150,alturaop,30);

  if(mouseIsPressed){
     tela=7;
    resposta =3;
    pontos= pontos-5;
     erros = erros +1;
      }
}
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Dois lados",553,373);
  //------------------------------opção4------------------------------------
  if(mouseX>op2_2&& mouseX<op2_2+150 && mouseY>op4 && mouseY<op4+alturaop){ 
  
        
   fill("#ff751a");
  stroke("#ff751a");
    fill("#ff751a");
    rect(op2_2,op4,150,alturaop,30);

  if(mouseIsPressed){
     tela=6;
    resposta=4;
    fase=3;
    pontos = pontos +10;
      }
}
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Três lados",625,442);
}
function fase4(){
   background(img6);
   image(bola,100,200,150,150);
//_________________topo______________________________________________
    stroke("#999966");
    fill("#999966");
    rect(sair,sair2,100,alturav,10);
//__________________sair______________________________________________________
if(mouseX>sair&& mouseX<sair+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#cc0000");
  stroke("#cc0000");
    fill("#cc0000");
    rect(sair,sair2,100,alturav,10);

  if(mouseIsPressed){
     tela=1;
      }
}
 

  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("Sair",690,532);  
    
   
//___________________topo2________________________________________
  stroke("#cc6600");
  fill("#ffff80")
  rect(10,10,100,40,10);
  rect(645,10,120,40,10);
  rect(50,110,690,45,10)
fill("#000000");
textFont(myFont,20);  
text("Figura 3",60,35); 
text("Pontos: "+pontos,700,35) ;  
textFont(myFont,24)
text("Arraste a planificação que se encaixa na bola de futebol!",400,140); 
//_______________________fase4__________________________________
fill("#fffff");
stroke("#fffff");
if(mouseIsPressed && dist(x,y,mouseX,mouseY)<150){
  x = mouseX;
  y = mouseY;
if(x>80&& x<80+100 &&y>150 && y<150+200){ 
tela=6;
pontos = pontos+15;
}
}
  if(mouseIsPressed && dist(x2,y2,mouseX,mouseY)<150){
  x2 = mouseX;
  y2 = mouseY;
if(x2>80&& x2<80+100 &&y2>150 && y2<150+200){ 
  tela=7;
  resposta=1;
  x2 = 0;
  y2 = 0;
  pontos = pontos -3;
   erros = erros +1;
}
}
  if(mouseIsPressed && dist(x3,y3,mouseX,mouseY)<150){
  x3 = mouseX;
  y3 = mouseY;
if(x3>80&& x3<80+100 &&y3>150 && y3<150+200){ 
    x3 = 0;
   y3 = 0;
   tela=7;
  resposta=2;
    pontos = pontos -3;
   erros = erros +1;
}
}
  
   stroke("#4d2600");
  fill("#fffff");
  ellipse(x,y,150,150);
  ellipse(x2,y2,170,115);
  square(x3,y3,120);


}
function fase5(){
  background(img6);
  image(celular,10,200,500,300);
//_________________topo______________________________________________
    stroke("#999966");
    fill("#999966");
    rect(sair,sair2,100,alturav,10);
  
    stroke("#ff751a");
    fill("#fffff");
    rect(430,op1,265,alturaop,30);
  
    stroke("#ff751a");
    fill("#fffff");
    rect(500,op2,265,alturaop,30);
  
    stroke("#ff751a");
    fill("#fffff");
    rect(430,op3,265,alturaop,30);
  
    stroke("#ff751a");
    fill("#ffffdf");
    rect(500,op4,265,alturaop,30);
//__________________sair______________________________________________________
if(mouseX>sair&& mouseX<sair+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#cc0000");
  stroke("#cc0000");
    fill("#cc0000");
    rect(sair,sair2,100,alturav,10);

  if(mouseIsPressed){
     tela=1;
      }
}
 

  textAlign(CENTER);
  textSize(26);
  textFont(myFont,24);
  fill("#000000");
    text("Sair",690,532);  
    
   
//___________________topo2________________________________________
  stroke("#cc6600");
  fill("#ffff80")
  rect(10,10,100,40,10);
  rect(645,10,120,40,10);
  rect(60,110,680,45,10)
fill("#000000");
textFont(myFont,20);  
text("Figura 5",60,35); 
text("Pontos: "+pontos,700,35) ;  
textFont(myFont,24)
text("Qual a planificação e quantidade lados da figura ao lado?",405,140); 
//------------------------------opção1------------------------------------
     if(mouseX>430&& mouseX<430+265 && mouseY>op1 && mouseY<op1+alturaop){ 
  
       
   fill("#ff751a");
  stroke("#ff751a");
    fill("#ff751a");
    rect(430,op1,265,alturaop,30);

  if(mouseIsPressed){
     tela=12;
    pontos = pontos +15; 
   
      }
}
  
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Retângulo e  4 lados",563,233);  
//------------------------------opção2------------------------------------
  if(mouseX>500&& mouseX<500+265 && mouseY>op2 && mouseY<op2+alturaop){ 
  
        
   fill("#ff751a");
  stroke("#ff751a");
    fill("#ff751a");
    rect(500,op2,265,alturaop,30);

  if(mouseIsPressed){
    tela=7;
     resposta =2;
    pontos= pontos-5;
     erros = erros +1;
      }
}
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Quadrado e 4 lados",630,303); 
//------------------------------opção3------------------------------------
if(mouseX>430&& mouseX<430+265 && mouseY>op3 && mouseY<op3+alturaop){ 
  
    
   fill("#ff751a");
  stroke("#ff751a");
    fill("#ff751a");
    rect(430,op3,265,alturaop,30);

  if(mouseIsPressed){
     tela=7;
    resposta =3;
    pontos= pontos-5;
     erros = erros +1;
      }
}
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Retângulo e 6 lados",563,373);
  //------------------------------opção4------------------------------------
  if(mouseX>500&& mouseX<500+265 && mouseY>op4 && mouseY<op4+alturaop){ 
  
        
   fill("#ff751a");
  stroke("#ff751a");
    fill("#ff751a");
    rect(500,op4,265,alturaop,30);

  if(mouseIsPressed){
     tela=7;
     resposta=4;
    pontos= pontos-5;
     erros = erros +1;
      }
}
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Quadrado e 6 lados",630,442);

}
function final(){
 background(img6);
  image(feliz,450,150,300,350);
   fill("#fffff");
  stroke("#cc6600");
  rect(300,60,200,60,20);
 
  fill("#000000");
  textSize(50);
  textAlign(CENTER);
  text("Fim",400,110);
  textSize(25);
  textAlign(LEFT);
   text("Parabéns você chegou ao final do jogo.",10,200);
   text("Sua pontuação final foi de: "+ pontos+" pontos",10,250);
   text("e "+erros+" tentativas erradas.",10,300);
  
//________________topo_______________________________  
  stroke("#999966");
    fill("#999966");
    rect(sair,sair2,100,alturav,10);
  
   stroke("#999966");
    fill("#999966");
    rect(100,sair2,200,alturav,10);
//_______________________sair___________________________
if(mouseX>sair&& mouseX<sair+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#cc0000");
  stroke("#cc0000");
    fill("#cc0000");
    rect(sair,sair2,100,alturav,10);

  if(mouseIsPressed){
     remove();
      }
}
 
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("Sair",690,532);   
//_______________________________jogar dnv_______________________________________  
  
  if(mouseX>100&& mouseX<200+100 && mouseY>sair2 && mouseY<sair2+alturav){ 
  fill("#00ff00");
  stroke("#00ff00");
  fill("#00ff00");
  rect(100,sair2,200,alturav,10);

  if(mouseIsPressed){
    tela=1;
    
      }
} 
  textAlign(CENTER);
  textFont(myFont,24);
  fill("#000000");
    text("jogar novamente",200,532);       
  
}
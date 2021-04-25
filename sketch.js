/*
Link para vídeo explicativo do MENU do programa:
https://www.youtube.com/watch?v=LttjWI7ECwA

Link para vídeo explicativo da PROVA 2 do programa:
https://youtu.be/EKMRJ5s537w
*/

var tela =1;
var largura = 200;
var altura = 50;
var xMenu = 150;
var yMenu1 = 85;
var yMenu2 = 145;
var yMenu3 = 205;
var xBotaoVoltar = 450;
var yBotaoVoltar = 260;
var xBotaoDificult1 = 120;
var xBotaoDificult2 = 240;
var xBotaoDificult3 = 360;
var yBotaoDificult = 100;
var test=0; // para mudar cor dos textos nas caixas
var xsetaSeta = 390;
var ysetaSeta = 275;
var timer = 3;
var timerErro = 2;
var timerErro2 = 2;
var somTest1=0; // para testar se o som já foi tocado
var somTest2=0;
var somTest3=0;
var somTest4=0;
var contSomTimer=120;
var contSomTimerL=180;
var contSomTimerF=180;
var tocando=1;
//imagens jogo
let img; // teste 1
let caixaR;
let caixaG;
let caixaB;
let carroCaixa;
let fundoMenu;
let fundoMenuEscuro;
let charFeliz1;
let charFalando;
let charTriste;
let charPerdeu;
let charGanhou;
let fundo_jogo1;
let tela21;
let telaQuestoes;
let telaAcertou;
let telaVitoria;
let telaDerrota;
//sons
let somClick;
let somClick2;
let somFundo;
let somResposta;
let somErro;
let somQuestoes;
let somFim;
//variaveis de dentro do jogo
var x =0; //altera entre telas com funçao
var proxTela;
var escolha=0;
var varFim=0;
var erro=0;
var vida=3;
var temporizador;
var tempoDeJogo;
var dificuldade=0;
//botoes dentro de jogo
var yOpcoes = 70;
var opcao1 = 30;
var opcao2 = 120;
var opcao3 = 210;
var opcao4;
var opcao5;

function preload() {
  img = loadImage('a.PNG');

  fundoMenu = loadImage('fundo_menu.png');
  fundoMenuEscuro =loadImage('fundo menu2.png');
  fundo_jogo1 =loadImage('fundo_jogo1.png');
  caixaR = loadImage('caixa_red.png');
  caixaG = loadImage('caixa_green.png');
  caixaB = loadImage('caixa_blue.png');
  carroCaixa = loadImage('carro_de_caixas.png');
  
  charFeliz = loadImage('char feliz.png');
  charGanhou = loadImage('char feliz2.png');
  charTriste = loadImage('char triste.png');
  charFalando = loadImage('char falando.png');
  charPerdeu = loadImage('char derrota.png');
  
  tela21 = loadImage('tela 21.png');
  telaQuestoes = loadImage('tela questoes.png');
  telaAcertou = loadImage('tela acertou.png');
  telaVitoria = loadImage('tela vitoria.png');
  telaDerrota = loadImage('tela derrota.png');
  ///////////sons
  
  soundFormats('mp3');
  somClick = loadSound('Comical Pop Sound.mp3');
  somClick2 = loadSound('POP.mp3');
  somFundo = loadSound('blippy-trance.mp3');
  somQuestoes = loadSound('Ls theme A.mp3');
  somFim = loadSound('C418 minecraft.mp3');
  somResposta = loadSound('Done Bell.mp3');
  somErro = loadSound('Critical Point.mp3');
}

function setup() {
  createCanvas(500, 300);
  somFundo.play();
  somFundo.setVolume(0.08, 0.2);
}

function resetarVariaveis(){
  while(tela==99 || tela == 100){
      timer = 3;
      temporizador = tempoDeJogo;
      timerErro =2;
      timerErro2 =2;
      erro =0;
    
      tela =1;
  }
  
  while(tela == x && escolha==0){
    
      if(x ==22){
        x =0;
        proxTela=23;
        tela =30;
        somResposta.play();
      }
      if(x ==23){
        x =0;
        proxTela=24;
        tela =30;
        somResposta.play();
      }
      if(x ==24){
        x =0;
        proxTela=25
        tela = 30;
        somResposta.play();
      }
      if(x ==25){
        x =0;
        proxTela=26;
        tela = 30;
        somResposta.play();
      }
      if(x ==26){
        x =0;
        proxTela=100; //tela do "Victory !!!"
        somResposta.play();
        somVar=1;
        console.log(resetarSons());
      }
      timerErro =2;
      timerErro2 =2;
      timer =3;
      temporizador = tempoDeJogo;
      
  }
  while(escolha==1){
    
      vida = vida -1;
      timer =3;
      timerErro =2;
      timerErro2 =2;
      escolha =0;
      somErro.play();
  }
  while(varFim ==1){
      tela = 99;//tela do GAME OVER
      timer = 3;
      timerErro =2;
      timerErro2 =2;
      erro =0;
      varFim =0;
      somVar=3;
      console.log(resetarSons());
  }
}
function resetarSons(){
  if(somVar ==1 ){
    somFundo.stop();
    somFim.stop();
    somQuestoes.stop();
    somFundo.play();
    somFundo.setVolume(0.08, 0.2);
    somVar=0;//
    tocando =1;
    contSomTimer =120;
  }
  if(somVar==2){
    somFundo.stop();
    somQuestoes.play();
    somQuestoes.setVolume(0.09, 0.2);
    tocando =2;
    contSomTimerL=180;
  }
  
  if(somVar==3){
    somFundo.stop();
    somQuestoes.stop();
    somFim.play();
    somFim.setVolume(0.6, 0.2);
    tocando = 3;
    contSomTimerF=180;
  }
}

function draw() {
  textStyle(NORMAL);
  //Tela de menu
  if(tocando==1){
  if (frameCount % 60 == 0 && contSomTimer > 0) { 
    contSomTimer --;
  }
  if(contSomTimer == 0){
    somVar=1;
    console.log(resetarSons());
  }//faza musica de fundo reiniciar
  }
  
  
  if(tocando==2){ // tocando a faixa de fundo 2 (L song)
  if (frameCount % 60 == 0 && contSomTimerL > 0) { 
    contSomTimerL --;
  }  
  if(contSomTimerL == 0){
    somVar=2;
    console.log(resetarSons());
  }//faza musica de fundo 2 reiniciar
  }
  
  
  if(tocando==3){ // tocando a faixa de fundo 2 (L song)
  if (frameCount % 60 == 0 && contSomTimerF > 0) { 
    contSomTimerF --;
  }  
  if(contSomTimerF == 0){
    somVar=2;
    console.log(resetarSons());
  }//faza musica de fundo 2 reiniciar
  }
  
  
  
  if(tela == 1){
    //menu
    background(fundoMenuEscuro);
    
    stroke(color('#B18F29'));
    fill(color('#EBC97E'));
    rect(125,0,250,300); // caixa do fundo
    stroke(color('#EBCB6A'));
    fill(color('#F1DA97'));
    rect(200,0,50,300);//"fita de fundo vertical"
    stroke(color('#EBCB6A'));
    fill(color('#F1DA97'));
    rect(125,200,251,50);//"fita de fundo horizontal"  
    noStroke();
    fill(color('#F4EAD6'));
    rect(300,240,50,50);//"detalhe de fundo"
    noStroke();
    fill(color('#E5D2A8'));
    rect(305,245,40,40);//"detalhe de fundo"
     stroke(color('#EBCB6A'));
    fill(color('#F1DA97'));
    rect(125,20,251,50);//"fita de fundo horizontal para Menu"  

    
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(40);
    strokeWeight(1.5);
    stroke(color('#8B723B'));
    fill(color('#D0B884'));
    text("Box|Division", 250, 60);
    textStyle(NORMAL);
    
    textSize(12);
    stroke(255);
    fill(100);
    text("@demoalone", 50,290);//minha "assinatura"
    
    for(var i =0, yyMENU=yMenu1+2; i <3; i++, yyMENU+=60){
      //for para fazer sombras dos botões do menu
    stroke(0);
    fill(0);
    rect(xMenu-2, yyMENU, largura+4, altura, 15);
    }
    
    textSize(26);//voltar ao tamanho 26
    //retangulo iniciar
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
    //primeiro retangulo (iniciar)
      if(somTest1==0){
        somClick.play();//teste de som
        somClick.setVolume(0.2);
        somTest1=1;
      }
      stroke(color('#FFFFFF')); //cor da borda
      fill(color('#7ACB7E')); //cor do fundo
    if(mouseIsPressed){
      somClick2.setVolume(0.2);
      somClick2.play();
      tela=98;
      
    }
      test =1;
    }

    else{
      somTest1=0;
      stroke(color('#4F9D1F'));
      fill(color('#99CB7A'));
      test=0;
    }
    rect(xMenu, yMenu1, largura, altura, 15);
    textAlign(CENTER);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#4F9D1F'));
    text("Iniciar", 250, 120);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("Iniciar", 250, 120);
    }
    
    
    //retangulo informaçoes
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    //segundo retangulo (informaçoes)
      if(somTest2==0){
        somClick.play();//teste de som
        somClick.setVolume(0.2);
        somTest2=1;
      }
      stroke(color('#FFFFFF')); //cor da borda
      fill(color('#CB7D3D')); //cor do fundo
    
    if(mouseIsPressed){
      tela=3;
      somClick2.setVolume(0.2);
      somClick2.play();
    }
      test=1
    }
    else{
      somTest2=0;
      stroke(color('#C76A1D'));
      fill(color('#E0975B'));
      test=0;
    }
    rect(xMenu, yMenu2, largura, altura, 15);
     textAlign(CENTER);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#C76A1D'));
    text("Informações", 250, 180);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("Informações", 250, 180);
    }
    
    //retangulo de creditos
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
    //terceiro retangulo (créditos)
      if(somTest3==0){
        somClick.play();//teste de som
        somClick.setVolume(0.2);
        somTest3=1;
      }
      stroke(color('#FFFFFF')); //cor da borda
      fill(color('#7F7F7F')); //cor do fundo
    if(mouseIsPressed){
      tela=4;
      somClick2.setVolume(0.2);
      somClick2.play();
    }
      test=1;
    }
    else{
      somTest3=0;
      stroke(color('#6D6D6D'));
      fill(color('#A5A5A5'));
      test=0;
    }
    rect(xMenu, yMenu3, largura, altura, 15);
    textAlign(CENTER);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#6D6D6D'));
    text("Créditos", 250, 240);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("Créditos", 250, 240);
    }
    
  }//fim da tela 1 (menu)
  
  if(tela == 98){
    //selecionar dificuldade
    
    background(fundoMenuEscuro);
    textAlign(CENTER);
   
    
    stroke(color('#636363'));
    fill(255);
    rect(420,50,60,80,15);//balao do boneco
    fill(255);
    rect(60,20,380,260,15);//balao branco
    fill(color('#3F3F3F'));
    rect(70,yBotaoDificult-50,100,200,15);//balao botao
    rect(190,yBotaoDificult-50,100,200,15);//balao botao
    rect(310,yBotaoDificult-50,100,200,15);//balao botao
   
    noStroke();
    fill(255);
    rect(420,52,50,76,15);//Fundo do boneco
    image(charFeliz, 430, 50,60,80);
    textAlign(LEFT);
    textSize(10);
    text("Tempo por questão: \n120s.\n\nQuestões: \nSIMPLES.", 75,yBotaoDificult+50);
    text("Tempo por questão: \n60s.\n\nQuestões: \nMEDIANAS.", 195,yBotaoDificult+50);
    text("Tempo por questão: \n40s.\n\nQuestões: \nMUITO DIFÍCEIS.", 315,yBotaoDificult+50);
    
    
    
    
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
    
    noStroke(0);
    fill(0);
    ellipse(xBotaoDificult1-2, yBotaoDificult+2, 52);
    ellipse(xBotaoDificult2-2, yBotaoDificult+2, 52);
    ellipse(xBotaoDificult3-2, yBotaoDificult+2, 52);
    
    if(timer!=0){//enquanto nao pode escolher
      textAlign(LEFT);
      textSize(12);
      fill(255);
      text(timer + "   << espere para escolher", 10, 15);
      textAlign(CENTER); 
      //facil
      textSize(16);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      ellipse(xBotaoDificult1, yBotaoDificult, 50);
      noStroke();
      fill(color('#777777'));
      text("Fácil", xBotaoDificult1, yBotaoDificult+4);
      //medio

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      ellipse(xBotaoDificult2, yBotaoDificult, 50);
      noStroke();
      fill(color('#777777'));
      text("Médio", xBotaoDificult2, yBotaoDificult+4);
      //difícil

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      ellipse(xBotaoDificult3, yBotaoDificult, 50);
      noStroke();
      fill(color('#777777'));
      text("???", xBotaoDificult3, yBotaoDificult+4);
      
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      ellipse(xBotaoVoltar, yBotaoVoltar, 50);
      noStroke();
      fill(color('#777777'));
      text("voltar", xBotaoVoltar, yBotaoVoltar+2);
    }
    
    
    if(timer==0){
    textAlign(LEFT);
    textSize(12);
    fill(255);
    text("Pode escolher!", 10, 15);
//dificuldade facil
    textAlign(CENTER);
    if(mouseX > xBotaoDificult1 -25 && mouseX < xBotaoDificult1 + 25 && mouseY > yBotaoDificult - 25 && mouseY < yBotaoDificult + 25){

      textSize(16);
      if(somTest1==0){
        somClick.play();//teste de som
        somClick.setVolume(0.2);
        somTest1=1;
      }
    stroke(color('#D6EEB3')); //cor da borda
    fill(color('#84D019')); //cor do fundo
      if(mouseIsPressed){
        dificuldade=1;
        tela =2;
        tempoDeJogo = 120;
        timer =3;
        somClick2.setVolume(0.2);
        somClick2.play();
    }
      test = 1;
    }
    else{
      somTest1=0;
      stroke(color('#8FDF1F'));
      fill(color('#AAE754'));
      test=0;
    }
    ellipse(xBotaoDificult1, yBotaoDificult, 50);
    if(test == 0){
    textSize(16);
    noStroke();
    fill(color('#6A9B26'));
    text("Fácil", xBotaoDificult1, yBotaoDificult+4);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("Fácil", xBotaoDificult1, yBotaoDificult+4);
    }
    
//dificuldade média    
   if(mouseX > xBotaoDificult2 -25 && mouseX < xBotaoDificult2 + 25 && mouseY > yBotaoDificult - 25 && mouseY < yBotaoDificult + 25){

      textSize(16);
    if(somTest2==0){
        somClick.play();//teste de som
        somClick.setVolume(0.2);
        somTest2=1;
      }
    stroke(color('#F3A144')); //cor da borda
    fill(color('#F28911')); //cor do fundo
    
      if(mouseIsPressed){
        dificuldade=2;
        tela =2;
        tempoDeJogo = 60;
        timer =3;
        somClick2.setVolume(0.2);
        somClick2.play();
      
   }
      test = 1;
    }
    else{
      somTest2=0;
      stroke(color('#C77A23'));
      fill(color('#E49B48'));
      test=0;
    }
    ellipse(xBotaoDificult2, yBotaoDificult, 50);
    if(test == 0){
    textSize(16);
    noStroke();
    fill(color('#9A5D18'));
    text("Médio", xBotaoDificult2, yBotaoDificult+4);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("Médio", xBotaoDificult2, yBotaoDificult+4);
    }
      
//dificuldade ???
       if(mouseX > xBotaoDificult3 -25 && mouseX < xBotaoDificult3 + 25 && mouseY > yBotaoDificult - 25 && mouseY < yBotaoDificult + 25){

      textSize(16);
    if(somTest3==0){
        somClick.play();//teste de som
        somClick.setVolume(0.2);
        somTest3=1;
      }
    stroke(color('#F75E5E')); //cor da borda
    fill(color('#F31010')); //cor do fundo
    
      if(mouseIsPressed){
        dificuldade=3;
        tela =2;
        tempoDeJogo = 40;
        timer =3;
        somClick2.setVolume(0.2);
        somClick2.play();
   }
      test = 1;
    }
    else{
      somTest3=0;
      stroke(color('#DE1B1B'));
      fill(color('#F14646'));
      test=0;
    }
    ellipse(xBotaoDificult3, yBotaoDificult, 50);
    if(test == 0){
    textSize(16);
    noStroke();
    fill(color('#980F0F'));
    text("???", xBotaoDificult3, yBotaoDificult+4);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("???", xBotaoDificult3, yBotaoDificult+4);
    }
      
      if(mouseX > xBotaoVoltar -25 && mouseX < xBotaoVoltar + 25 && mouseY > yBotaoVoltar - 25 && mouseY < yBotaoVoltar + 25){

      textSize(16);
    if(somTest4==0){
        somClick.play();//teste de som
        somClick.setVolume(0.2);
        somTest4=1;
      }
    stroke(color('#A93636')); //cor da borda
    fill(color('#D75555')); //cor do fundo
    
      if(mouseIsPressed){
        tela=1;
        timer =3;
        somClick2.setVolume(0.2);
        somClick2.play();
      }
      test = 1;
    }
    else{
      somTest4=0;
      stroke(color('#AF0D0D'));
      fill(color('#D49A9A'));
      test=0;
    }
    ellipse(xBotaoVoltar, yBotaoVoltar, 50);
    if(test == 0){
    textSize(16);
    noStroke();
    fill(color('#AF0D0D'));
    text("voltar", xBotaoVoltar, yBotaoVoltar+2);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("voltar", xBotaoVoltar, yBotaoVoltar+2);
    }
  }//fim timer ==0
    
  }//fim da tela 98(selecionar dificuldade)
  if(tela == 2){
    background(fundo_jogo1);
    textAlign(LEFT);
    textSize(18);
    //image(caixaR, 300, 50,80,80);
    //image(caixaG, 150, 50,80,80);
   // image(caixaB, 250, 60,80,80);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    text("Oh! Olá, poderia me ajudar a dividir essas \ncaixas? Meu chefe começou a me pedir a divisão das caixas usando 'partes' , e isso me confunde \num pouco." , 10, 210, 400, 200);
    fill(255);
    rect(440,205,60,100);//balao do boneco
    image(charFalando, 440, 210,60,80);
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
    
    if(timer!=0){//enquanto nao pode escolher
      textAlign(LEFT);
      textSize(12);
      fill(255);
      text(timer + "   << espere para escolher", 10, 15);
      textAlign(CENTER); 
  
      textSize(18);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(xsetaSeta+10, ysetaSeta, 30, 20);
      noStroke();
      fill(color('#777777'));
      text(">>", xsetaSeta + 25, ysetaSeta + 17);
      
    }

    
  if (timer == 0) {
     textAlign(LEFT);
    textSize(12);
    fill(255);
    text("Pode escolher!", 10, 15);
    textSize(18);
    textAlign(CENTER);
    //mouse em cima do botao de passar conversa:
    if(mouseX > xsetaSeta +10 && mouseX < xsetaSeta + 40 && mouseY > ysetaSeta && mouseY < ysetaSeta + 20){

    if(somTest1==0){
        somClick.play();//teste de som
        somClick.setVolume(0.2);
        somTest1=1;
      }
    stroke(color('#22E62C')); //cor da borda
    fill(color('#7ACB7E')); //cor do fundo
    
      if(mouseIsPressed){
        //fazer trocar as imagens e falas. Quando chegar na ultima trocar para a tela 21 (dentro do jogo);
        tela=21;
        timer =3;
        temporizador = tempoDeJogo;
        somClick2.setVolume(0.2);
        somClick2.play();
      }
      test = 1;
    }
    else{
      somTest1=0;
      stroke(color('#38C13F'));
      fill(color('#BAD7BC'));
      test=0;
    }
    rect(xsetaSeta + 10, ysetaSeta, 30, 20);
    textAlign(CENTER);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#38C13F'));
    text(">>", xsetaSeta + 25, ysetaSeta + 17);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text(">>", xsetaSeta + 25, ysetaSeta + 17);
    }
  }
  }//fim da tela 2 (iniciar)
  if(tela == 21){
    //segunda janela de conversa depois de iniciar
    background(tela21);
    textAlign(LEFT);
    textSize(18);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    text("Poderia me ajudar a separar as caixas dos \npróximos 5 caminhões? Seria de grande ajuda. " , 10, 210, 400, 200);
   
    

  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }

     if(timer!=0){//enquanto nao pode escolher
      textAlign(LEFT);
      textSize(12);
      text(timer + "   << espere para escolher", 10, 15);
      textAlign(CENTER); 
  
      textSize(18);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(xsetaSeta, ysetaSeta, 30, 20);
      noStroke();
      fill(color('#777777'));
      text("<<", xsetaSeta + 15, ysetaSeta + 17);
      
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(xsetaSeta + 40, ysetaSeta, 60, 20);
      noStroke();
      fill(color('#777777'));
      text("ajudar", xsetaSeta + 70, ysetaSeta + 15);
    }
    
  if (timer == 0) {
   textAlign(LEFT);
    textSize(12);
    text("Pode escolher!", 10, 15);
    textSize(18);
    textAlign(CENTER);
  
    //mouse em cima do botao de passar conversa:
    if(mouseX > xsetaSeta + 40 && mouseX < xsetaSeta + 100 && mouseY > ysetaSeta && mouseY < ysetaSeta + 20){
    
      if(somTest1==0){
        somClick.play();//teste de som
        somClick.setVolume(0.2);
        somTest1=1;
      }
    stroke(color('#22E62C')); //cor da borda
    fill(color('#7ACB7E')); //cor do fundo
    
      if(mouseIsPressed){
        tela=22; // ir para a tela 22
        timer = 3;
        somVar=2;
        console.log(resetarSons());
        somClick2.setVolume(0.2);
        somClick2.play();
      }
      test = 1;
    }
    else{
      somTest1=0;
      stroke(color('#38C13F'));
      fill(color('#BAD7BC'));
      test=0;
    }
    rect(xsetaSeta + 40, ysetaSeta, 60, 20);
    textAlign(CENTER);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#38C13F'));
    text("ajudar", xsetaSeta + 70, ysetaSeta + 15);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("ajudar", xsetaSeta + 70, ysetaSeta + 15);
    }
    
/////// botao para voltar fala://///////////////
    if(mouseX > xsetaSeta && mouseX < xsetaSeta + 30 && mouseY > ysetaSeta && mouseY < ysetaSeta + 20){
    if(somTest2==0){
        somClick.play();//teste de som
        somClick.setVolume(0.2);
        somTest2=1;
      }
    stroke(color('#F30B0B')); //cor da borda
    fill(color('#D22222')); //cor do fundo
    
      if(mouseIsPressed){
        tela=2;
        timer = 3;
        somClick2.setVolume(0.2);
        somClick2.play();
      }
      test = 1;
    }
    else{
      somTest2=0;
      stroke(color('#E44848'));
      fill(color('#D39B9B'));
      test=0;
    }
    rect(xsetaSeta, ysetaSeta, 30, 20);
    textAlign(CENTER);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E44848'));
    text("<<", xsetaSeta + 15, ysetaSeta + 17);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("<<", xsetaSeta + 15, ysetaSeta + 17);
    }
  }//fim do timer == 0
  }// fim da tela 21 (seguido do iniciar)
  
  if(tela == 3){
    background(fundoMenuEscuro);
    textAlign(CENTER);
    
    stroke(color('#CECECE'));
    fill(255);
    rect(420,50,60,80,15);//balao do boneco
    fill(255);
    rect(130,220,230,80,15);//balao dos icones
    fill(255);
    rect(60,20,380,260,15);//balao branco
   
    noStroke();
    fill(255);
    rect(130,210,230,80,15);//fundo dos icones
    fill(255);
    rect(410,52,60,76,15);//Fundo do boneco
  
    
    textSize(36);
    fill(10);
    text("Instruções", 250, 55);
    textAlign(LEFT);
    textSize(12);
    text(" - O Jogo conta com 5 níveis;", 70, 80, 350, 300);
    text(" - Use o mouse para selecionar respostas;", 70, 80 + (1*14), 350, 300);
    text(" - O jogo possui 3 dificuldades: (fácil), (normal) e (difícil). Todas \nelas alteram o tempo por questão e a dificuldade das perguntas;", 70, 80 + (2*14), 350, 300);
    textAlign(CENTER);
    text(" Público alvo: 3º ano do Fundamental.", 70, 80 + (5*14), 350, 300);
    text(" Matéria: Matemática || Habilidade: EF03MA09", 70, 80 + (6*14), 350, 300);
    textAlign(LEFT);
    text(" Resumo do jogo: Temos um trabalhador que precisa dividir as \ncaixas conforme seu chefe pede, mas seu chefe começou a pedir a divisão pelas partes. Ex: Metade, Quinta parte, Décima parte, Quarta parte ...\nVocê precisa ajudar o trabalhador a dividir essas caixas.", 70, 185, 350, 300);
    image(carroCaixa, 200, 253,60,50);
    image(caixaR, 130, 252,60,50);
    image(caixaG, 260, 252,60,50);
    image(caixaB, 300, 252,60,50);
    image(charFalando, 430, 50,60,80);
    
    textAlign(CENTER);
    if(mouseX > xBotaoVoltar -25 && mouseX < xBotaoVoltar + 25 && mouseY > yBotaoVoltar - 25 && mouseY < yBotaoVoltar + 25){

      textSize(16);
    if(somTest1==0){
        somClick.play();//teste de som
        somClick.setVolume(0.2);
        somTest1=1;
      }
    stroke(color('#A93636')); //cor da borda
    fill(color('#D75555')); //cor do fundo
    
      if(mouseIsPressed){
        tela=1;
        somClick2.setVolume(0.2);
        somClick2.play();
      }
      test = 1;
    }
    else{
      somTest1=0;
      stroke(color('#AF0D0D'));
      fill(color('#D49A9A'));
      test=0;
    }
    ellipse(xBotaoVoltar, yBotaoVoltar, 50);
    if(test == 0){
    textSize(16);
    noStroke();
    fill(color('#AF0D0D'));
    text("voltar", xBotaoVoltar, yBotaoVoltar+2);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("voltar", xBotaoVoltar, yBotaoVoltar+2);
    }
    
  }//fim da tela 3 (informações)
  if(tela == 4){
    background(fundoMenuEscuro);
    textAlign(CENTER);
    
    fill(255);
    rect(60,20,380,260,15);//balao branco
    fill(255);
    rect(175,0,150,60,15);//balao branco
    
    textSize(36);
    fill(2);
    text("Créditos", 250, 30);
    textAlign(LEFT);
    image(img, 120, 40,220,180);
    textSize(16);
    fill(30);
    text("Bruno Renovato de Souza Dias \n(Programador).",100,240,250,300);
    textSize(12);
    fill(30);
    text("(UFRN)_Projeto de LoP.",300,80,250,300);
    textAlign(CENTER);
    //botao voltar ->
    textSize(16);
     if(mouseX > xBotaoVoltar -25 && mouseX < xBotaoVoltar + 25 && mouseY > yBotaoVoltar - 25 && mouseY < yBotaoVoltar + 25){

    if(somTest1==0){
        somClick.play();//teste de som
        somClick.setVolume(0.2);
        somTest1=1;
      }
    stroke(color('#A93636')); //cor da borda
    fill(color('#D75555')); //cor do fundo
    
      if(mouseIsPressed){
        tela=1;
        somClick2.setVolume(0.2);
        somClick2.play();
      }
      test = 1;
    }
    else{
      somTest1=0;
      stroke(color('#AF0D0D'));
      fill(color('#D7A7A7'));
      test=0;
    }
    ellipse(xBotaoVoltar, yBotaoVoltar, 50);
    if(test == 0){
    noStroke();
    fill(color('#AF0D0D'));
    text("voltar", xBotaoVoltar, yBotaoVoltar+2);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("voltar", xBotaoVoltar, yBotaoVoltar+2);
    }
  
  }//fim do tela 4 (creditos)
  
  
  
if(dificuldade ==1){
  if(tela == 22){
    background(telaQuestoes);
    textAlign(LEFT);
    textSize(18);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    if(erro==0){
    text("Então vamos lá. Esse caminhão veio com 10 \ncaixas, sendo metade verde. O chefe quer \nTODOS os azuis. Você tem alguma ideia do \nquanto ele quer?" , 10, 210, 400, 200);
      
      
    textSize(12);
    fill(180);
    text("Nota: \nMetade = dividir por 2" , 10, 170, 200, 200);
      
      
    textSize(18);
    fill(255);
    text("Verdes: 5" , 355, 65, 100, 200);
    text("Vermelhas: 0" , 355, 112, 150, 200);
    text("Azuis: ???" , 355, 160, 150, 200);
    }//erro==0; end
    if(erro==1){
      
      text("Acho que não era isso..." , 10, 210, 400, 200);
      if (frameCount % 60 == 0 && timerErro > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
      timerErro --;
      }//fim do contador regressivo do erro
      if(timerErro ==0){
        textSize(18);
        stroke(255);
        fill(100);
        rect(0, 205, 500, 100);
        noStroke();
        fill(255);
        text("Vamos tentar novamente." , 10, 210, 400, 200);
        if (frameCount % 60 == 0 && timerErro2 > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
        timerErro2 --;
        }//fim do contador regressivo do erro2
        if(timerErro2 == 0){
          timerErro =2;
          timerErro2 =2;
          erro =0;
        }
      }// timerErro ==0
    }//fim erro ==1


  //text(timer, 10, 20); 
    // apartir daqui posso deixar esse timer "invisivel", ja q o jogador vai passar os 3 segundos lendo. No lugar dele na tela eu coloco o temporizador de 30 segundos(depende da dificuldade).
    text(temporizador, 10, 20); 
    if (frameCount % 60 == 0 && temporizador > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    temporizador --;
  }
    if(temporizador ==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
    
    textAlign(LEFT);
    textSize(18);
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
    ////////////////coloquei um while aqui
    
    if(timer!=0){//enquanto nao pode escolher
      if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
      textAlign(CENTER); 
      //facil
      textSize(13);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao1, yOpcoes, 60, 50);
      noStroke();
      fill(color('#777777'));
      text("2 azuis", opcao1+5, yOpcoes+10, 50, 40);
      //medio

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao2, yOpcoes, 60, 50);
      noStroke();
      fill(color('#777777'));
      text("3 azuis", opcao2+5, yOpcoes+10, 50, 40);
      //difícil

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao3, yOpcoes, 60, 50);
      noStroke();
      fill(color('#777777'));
      text("5 azuis", opcao3+5, yOpcoes+10, 50, 40);
    }
   
    if(timer ==0){
    textAlign(LEFT);
    textSize(18);
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
    
  ///////////// opcoes de resposta
     if(mouseX > opcao1 && mouseX < opcao1 + 60 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao1, yOpcoes, 60, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("2 azuis", opcao1+5, yOpcoes+10, 50, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("2 azuis", opcao1+5, yOpcoes+10, 50, 40);
    }
    
    
////outra caixa de opcao
   if(mouseX > opcao2 && mouseX < opcao2 + 60 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro = 1;
      escolha=1;
      console.log(resetarVariaveis());
    
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao2, yOpcoes, 60, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("3 azuis", opcao2+5, yOpcoes+10, 50, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("3 azuis", opcao2+5, yOpcoes+10, 50, 40);
    }
    
////outra caixa de opcao(3)
   if(mouseX > opcao3 && mouseX < opcao3 + 60 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =0;
      escolha =0;
      x = 22;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao3, yOpcoes, 60, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("5 azuis", opcao3+5, yOpcoes+10, 50, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("5 azuis", opcao3+5, yOpcoes+10, 50, 40);
    }
    if(vida==0){
      varFim=1;
      console.log(resetarVariaveis());
      
    }
    }//timer == 0
  }// fim da tela 22 (1 nivel)
  if(tela == 23){
    background(telaQuestoes);
    textAlign(LEFT);
    textSize(18);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    if(erro == 0){
      textSize(18);
    text("Esse é o 2º caminhão: Temos nele: 50 caixas \nazuis. Aqui diz que o chefe quer UM QUINTO \ndessas caixas. Você sabe o que ele pediu?" , 10, 210, 400, 200);
      
    textSize(12);
    fill(180);
    text("Nota: \nQuinta parte = dividir por 5" , 10, 145, 200, 200);
      
      
    textSize(18);
    fill(255);
    text("Verdes: 0" , 355, 65, 100, 200);
    text("Vermelhas: 0" , 355, 112, 150, 200);
    text("Azuis: 50" , 355, 160, 150, 200);
    }
    if(erro==1){
      textSize(18);
      text("Acho que não era isso..." , 10, 210, 400, 200);
      if (frameCount % 60 == 0 && timerErro > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
      timerErro --;
      }//fim do contador regressivo do erro
      if(timerErro ==0){
        textSize(18);
        stroke(255);
        fill(100);
        rect(0, 205, 500, 100);
        noStroke();
        fill(255);
        text("Vamos tentar novamente." , 10, 210, 400, 200);
        if (frameCount % 60 == 0 && timerErro2 > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
        timerErro2 --;
        }//fim do contador regressivo do erro2
        if(timerErro2 == 0){
          timerErro =2;
          timerErro2 =2;
          erro =0;
        }
      }// timerErro ==0
    }//fim erro ==1
      
  //text(timer, 10, 20); 
    // apartir daqui posso deixar esse timer "invisivel", ja q o jogador vai passar os 3 segundos lendo. No lugar dele na tela eu coloco o temporizador de 30 segundos(depende da dificuldade).
    
    //aqui vai o tempo que o jogador tem para responder. A dificuldade muda o valor
    textSize(18);
    text(temporizador, 10, 20); 
    if (frameCount % 60 == 0 && temporizador > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    temporizador --;
  }
    if(temporizador ==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
    
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
    noStroke();
    fill(255);
    textSize(18);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
   if(timer!=0){//enquanto nao pode escolher
      textAlign(LEFT); 
      //facil
      textSize(13);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao1, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("5 azuis", opcao1+5, yOpcoes+10, 80, 60);
      //medio

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao2, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("10 azuis", opcao2+5, yOpcoes+10, 80, 60);
      //difícil

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao3, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("15 azuis", opcao3+5, yOpcoes+10, 80, 60);
    }// fim do timer !=0
    
  if (timer == 0) {
    textAlign(LEFT);   
    noStroke();
    fill(255);
    textSize(18);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
  ///////////// (1) opcoes de resposta (começo)
     if(mouseX > opcao1 && mouseX < opcao1 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){ // resposta
      erro = 1;
      escolha=1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao1, yOpcoes, 80, 60);
    textAlign(LEFT);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("5 azuis", opcao1+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("5 azuis", opcao1+5, yOpcoes+10, 80, 60);
    }
    
    
////outra caixa de opcao
   if(mouseX > opcao2 && mouseX < opcao2 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =0;
      escolha = 0;
      x = 23;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao2, yOpcoes, 80, 60);
    //textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("10 azuis", opcao2+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("10 azuis", opcao2+5, yOpcoes+10, 80, 60);
    }
    
////outra caixa de opcao(3)
   if(mouseX > opcao3 && mouseX < opcao3 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
      //tela =24; resposta errada, nao troca de tela;
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao3, yOpcoes, 80, 60);
    //textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("15 azuis", opcao3+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("15 azuis", opcao3+5, yOpcoes+10, 80, 60);
    }
    if(vida==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
  }//timer == 0
  }// fim da tela 23 (2 nivel)
  if(tela == 24){
    background(telaQuestoes);
    textAlign(LEFT);
    textSize(18);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    if(erro == 0){
      textSize(18);
    text("Esse é o 3º caminhão: Temos nele: 10 caixas \nazuis e 10 vermelhas. Aqui diz que o chefe quer METADE de cada tipo de caixa. Você sabe o que ele pediu?" , 10, 210, 400, 200);
      
    textSize(12);
    fill(180);
    text("Nota: \nMetade = dividir por 2" , 10, 145, 200, 200);
      
      
    textSize(18);
    fill(255);
    text("Verdes: 0" , 355, 65, 100, 200);
    text("Vermelhas: 10" , 355, 112, 150, 200);
    text("Azuis: 10" , 355, 160, 150, 200);

    }
    if(erro==1){
      textSize(18);
      text("Acho que não era isso..." , 10, 210, 400, 200);
      if (frameCount % 60 == 0 && timerErro > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
      timerErro --;
      }//fim do contador regressivo do erro
      if(timerErro ==0){
        textSize(18);
        stroke(255);
        fill(100);
        rect(0, 205, 500, 100);
        noStroke();
        fill(255);
        text("Vamos tentar novamente." , 10, 210, 400, 200);
        if (frameCount % 60 == 0 && timerErro2 > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
        timerErro2 --;
        }//fim do contador regressivo do erro2
        if(timerErro2 == 0){
          timerErro =2;
          timerErro2 =2;
          erro =0;
        }
      }// timerErro ==0
    }//fim erro ==1
      
  //text(timer, 10, 20); 
    // apartir daqui posso deixar esse timer "invisivel", ja q o jogador vai passar os 3 segundos lendo. No lugar dele na tela eu coloco o temporizador de 30 segundos(depende da dificuldade).
    
    //aqui vai o tempo que o jogador tem para responder. A dificuldade muda o valor
    textSize(18);
    text(temporizador, 10, 20); 
    if (frameCount % 60 == 0 && temporizador > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    temporizador --;
  }
    if(temporizador ==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
    
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
    noStroke();
    fill(255);
    textSize(18);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
    if(timer!=0){//enquanto nao pode escolher
      textAlign(LEFT); 
      //facil
      textSize(12);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao1, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("5 azuis\n10 vermelhas", opcao1+5, yOpcoes+10, 80, 60);
      //medio

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao2, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("10 azuis\n5 vermelhas", opcao2+5, yOpcoes+10, 80, 60);
      //difícil

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao3, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("5 azuis\n5 vermelhas", opcao3+5, yOpcoes+10, 80, 60);
    }// fim do timer !=0
    
  if (timer == 0) {
    textAlign(LEFT);   
    noStroke();
    fill(255);
    textSize(18);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
  ///////////// (1)opcoes de resposta (começo)
     if(mouseX > opcao1 && mouseX < opcao1 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){ // resposta
      erro = 1;
      escolha=1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao1, yOpcoes, 80, 60);
    textAlign(LEFT);
    textSize(12);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("5 azuis\n10 vermelhas", opcao1+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("5 azuis\n10 vermelhas", opcao1+5, yOpcoes+10, 80, 60);
    }
    
    
////outra caixa de opcao
   if(mouseX > opcao2 && mouseX < opcao2 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
      //tela =24; só mudar a tela quando acerta? acho que é uma boa.
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao2, yOpcoes, 80, 60);
    //textAlign(CENTER);
    textSize(12);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("10 azuis\n5 vermelhas", opcao2+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("10 azuis\n5 vermelhas", opcao2+5, yOpcoes+10, 80, 60);
    }
    
////outra caixa de opcao(3)
   if(mouseX > opcao3 && mouseX < opcao3 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =0;
      escolha =0;
      x = 24;
      console.log(resetarVariaveis());
      //tela =24; resposta errada, nao troca de tela;
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao3, yOpcoes, 80, 60);
    //textAlign(CENTER);
    textSize(12);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("5 azuis\n5 vermelhas", opcao3+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("5 azuis\n5 vermelhas", opcao3+5, yOpcoes+10, 80, 60);
    }
    if(vida==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
  }//timer == 0
  }// fim da tela 24 (3 nivel)
  if(tela == 25){
    background(telaQuestoes);
    textAlign(LEFT);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    if(erro==0){
    textSize(18);
    text("Esse é o 4º caminhão: Temos 60 caixas nele, \nsendo 20 de cada tipo(azul, verde e vermelha). \nAqui diz que o chefe quer METADE de cada tipo de caixa. Qual a quantidade de caixas \nque vamos enviar AO TODO?" , 10, 210, 400, 200);
      
    textSize(12);
    fill(180);
    text("Nota: \nMetade = dividir por 2" , 10, 145, 200, 200);
      
      
    textSize(18);
    fill(255);
    text("Verdes: 20" , 355, 65, 100, 200);
    text("Vermelhas: 20" , 355, 112, 150, 200);
    text("Azuis: 20" , 355, 160, 150, 200);

    }//erro==0; end
    if(erro==1){
      textSize(18);
      text("Acho que não era isso..." , 10, 210, 400, 200);
      if (frameCount % 60 == 0 && timerErro > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
      timerErro --;
      }//fim do contador regressivo do erro
      if(timerErro ==0){
        textSize(18);
        stroke(255);
        fill(100);
        rect(0, 205, 500, 100);
        noStroke();
        fill(255);
        text("Vamos tentar novamente." , 10, 210, 400, 200);
        if (frameCount % 60 == 0 && timerErro2 > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
        timerErro2 --;
        }//fim do contador regressivo do erro2
        if(timerErro2 == 0){
          timerErro =2;
          timerErro2 =2;
          erro =0;
        }
      }// timerErro ==0
    }//fim erro ==1


  //text(timer, 10, 20); 
    // apartir daqui posso deixar esse timer "invisivel", ja q o jogador vai passar os 3 segundos lendo. No lugar dele na tela eu coloco o temporizador de 30 segundos(depende da dificuldade).
    textSize(18);
    text(temporizador, 10, 20); 
    if (frameCount % 60 == 0 && temporizador > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    temporizador --;
  }
    if(temporizador ==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
    
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
    if(timer!=0){//enquanto nao pode escolher
      textAlign(CENTER); 
      //facil
      textSize(13);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao1, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("20 caixas", opcao1+5, yOpcoes+20, 60, 40);
      //medio

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao2+5, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("30 caixas", opcao2+8, yOpcoes+20, 60, 40);
      //difícil

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao3+5, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("40 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }// fim do timer !=0
    
  if (timer == 0) {
    textAlign(LEFT);
    textSize(18);
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
  ///////////// (1)opcoes de resposta (começo)
     if(mouseX > opcao1 && mouseX < opcao1 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao1, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("20 caixas", opcao1+5, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("20 caixas", opcao1+5, yOpcoes+20, 60, 40);
    }
    
    
////outra caixa de opcao
   if(mouseX > opcao2 && mouseX < opcao2 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =0;
      escolha =0;
      x = 25;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao2+5, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("30 caixas", opcao2+8, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("30 caixas", opcao2+8, yOpcoes+20, 60, 40);
    }
    
////outra caixa de opcao(3)
   if(mouseX > opcao3 && mouseX < opcao3 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){//resposta
      erro = 1;
      escolha=1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao3+5, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("40 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("40 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }
    if(vida==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
  }//timer == 0
  }// fim da tela 25 (4 nivel)
  if(tela == 26){
    background(telaQuestoes);
    textAlign(LEFT);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    if(erro==0){
    textSize(16);
    text("Esse é o 5º caminhão: Temos 100 caixas ao todo, \nsendo 20 azuis e 20 vermelhas, e o restante verde. \nAqui diz que o chefe quer METADE das verdes. Qual a quantidade de caixas que vamos enviar AO TODO?" , 10, 210, 400, 200);
      
    textSize(12);
    fill(180);
    text("Nota: \nMetade = dividir por 2" , 10, 145, 200, 200);
      
      
    textSize(18);
    fill(255);
    text("Verdes: ???" , 355, 65, 100, 200);
    text("Vermelhas: 20" , 355, 112, 150, 200);
    text("Azuis: 20" , 355, 160, 150, 200);

    }//erro==0; end
    if(erro==1){
      textSize(18);
      text("Acho que não era isso..." , 10, 210, 400, 200);
      if (frameCount % 60 == 0 && timerErro > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
      timerErro --;
      }//fim do contador regressivo do erro
      if(timerErro ==0){
        textSize(18);
        stroke(255);
        fill(100);
        rect(0, 205, 500, 100);
        noStroke();
        fill(255);
        text("Vamos tentar novamente." , 10, 210, 400, 200);
        if (frameCount % 60 == 0 && timerErro2 > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
        timerErro2 --;
        }//fim do contador regressivo do erro2
        if(timerErro2 == 0){
          timerErro =2;
          timerErro2 =2;
          erro =0;
        }
      }// timerErro ==0
    }//fim erro ==1


  //text(timer, 10, 20); 
    // apartir daqui posso deixar esse timer "invisivel", ja q o jogador vai passar os 3 segundos lendo. No lugar dele na tela eu coloco o temporizador de 30 segundos(depende da dificuldade).
    textSize(18);
    text(temporizador, 10, 20); 
    if (frameCount % 60 == 0 && temporizador > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    temporizador --;
  }
    if(temporizador ==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
    
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
    if(timer!=0){//enquanto nao pode escolher
      textAlign(CENTER); 
      //facil
      textSize(13);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao1, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("20 caixas", opcao1+5, yOpcoes+20, 60, 40);
      //medio

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao2, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("10 caixas", opcao2+8, yOpcoes+20, 60, 40);
      //difícil

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao3, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("30 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }// fim do timer !=0
    
  if (timer == 0) {
    textAlign(LEFT);
    textSize(18);
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
  ///////////// (1)opcoes de resposta (começo)
     if(mouseX > opcao1 && mouseX < opcao1 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao1, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("20 caixas", opcao1+5, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("20 caixas", opcao1+5, yOpcoes+20, 60, 40);
    }
    
    
////outra caixa de opcao
   if(mouseX > opcao2 && mouseX < opcao2 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro = 1;
      escolha=1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao2+5, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("10 caixas", opcao2+8, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("10 caixas", opcao2+8, yOpcoes+20, 60, 40);
    }
    
////outra caixa de opcao(3)
   if(mouseX > opcao3 && mouseX < opcao3 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){//resposta
      erro =0;
      escolha =0;
      x = 26;
      console.log(resetarVariaveis());
      tela = proxTela;
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao3+5, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("30 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("30 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }
    if(vida==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
  }//timer == 0
  }// fim da tela 26 (5 nivel)
  if(tela == 30){
     background(telaAcertou);
    textAlign(LEFT);
    textSize(18);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    text("Era isso mesmo! Vamos ao próximo caminhão" , 10, 210, 400, 200);
    
     if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }

     if(timer!=0){//enquanto nao pode escolher
      textAlign(LEFT);
      textSize(12);
      text(timer + "   << espere para escolher", 10, 15);
      textAlign(CENTER); 
      textSize(18);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(xsetaSeta + 40, ysetaSeta, 60, 20);
      noStroke();
      fill(color('#777777'));
      text(">>", xsetaSeta + 70, ysetaSeta + 17);
    }
    
  if (timer == 0) {
   textAlign(LEFT);
    textSize(12);
    text("Pode escolher!", 10, 15);
    textSize(18);
    textAlign(CENTER);
  
    //mouse em cima do botao de passar conversa:
    if(mouseX > xsetaSeta + 40 && mouseX < xsetaSeta + 100 && mouseY > ysetaSeta && mouseY < ysetaSeta + 30){

    stroke(color('#22E62C')); //cor da borda
    fill(color('#7ACB7E')); //cor do fundo
    
      if(mouseIsPressed){
        tela=proxTela;
        timer = 3;
      }
      test = 1;
    }
    else{
      stroke(color('#38C13F'));
      fill(color('#BAD7BC'));
      test=0;
    }
    rect(xsetaSeta + 40, ysetaSeta, 60, 20);
    textAlign(CENTER);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#38C13F'));
    text(">>", xsetaSeta + 70, ysetaSeta + 17);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text(">>", xsetaSeta + 70, ysetaSeta + 17);
    }
  }//fim do timer == 0
  }// tela dizendo que acertou
}//fim dificuldade 1  
  
if(dificuldade ==2){
  if(tela == 22){
    background(telaQuestoes);
    textAlign(LEFT);
    textSize(18);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    if(erro==0){
    text("Então vamos lá. Esse caminhão veio com 20 \ncaixas, sendo metade azul e metade verde. O \nchefe quer UM QUINTO de cada tipo... Você tem alguma ideia do quanto ele quer?" , 10, 210, 400, 200);
      
      
    textSize(12);
    fill(180);
    text("Nota: \nQuinta parte = dividir por 5" , 10, 170, 200, 200);
      
      
    textSize(18);
    fill(255);
    text("Verdes: 10" , 355, 65, 100, 200);
    text("Vermelhas: 0" , 355, 112, 150, 200);
    text("Azuis: 10" , 355, 160, 150, 200);
    }//erro==0; end
    if(erro==1){
      
      text("Acho que não era isso..." , 10, 210, 400, 200);
      if (frameCount % 60 == 0 && timerErro > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
      timerErro --;
      }//fim do contador regressivo do erro
      if(timerErro ==0){
        textSize(18);
        stroke(255);
        fill(100);
        rect(0, 205, 500, 100);
        noStroke();
        fill(255);
        text("Vamos tentar novamente." , 10, 210, 400, 200);
        if (frameCount % 60 == 0 && timerErro2 > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
        timerErro2 --;
        }//fim do contador regressivo do erro2
        if(timerErro2 == 0){
          timerErro =2;
          timerErro2 =2;
          erro =0;
        }
      }// timerErro ==0
    }//fim erro ==1


  //text(timer, 10, 20); 
    // apartir daqui posso deixar esse timer "invisivel", ja q o jogador vai passar os 3 segundos lendo. No lugar dele na tela eu coloco o temporizador de 30 segundos(depende da dificuldade).
    text(temporizador, 10, 20); 
    if (frameCount % 60 == 0 && temporizador > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    temporizador --;
  }
    if(temporizador ==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
    
    textAlign(LEFT);
    textSize(18);
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
    ////////////////coloquei um while aqui
    
    if(timer!=0){//enquanto nao pode escolher
      if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
      textAlign(CENTER); 
      //facil
      textSize(13);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao1, yOpcoes, 60, 50);
      noStroke();
      fill(color('#777777'));
      text("5 azuis\n5 verdes", opcao1+5, yOpcoes+10, 50, 40);
      //medio

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao2, yOpcoes, 60, 50);
      noStroke();
      fill(color('#777777'));
      text("3 azuis\n3 verdes", opcao2+5, yOpcoes+10, 50, 40);
      //difícil

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao3, yOpcoes, 60, 50);
      noStroke();
      fill(color('#777777'));
      text("2 azuis\n2 verdes", opcao3+5, yOpcoes+10, 50, 40);
    }
   
    if(timer ==0){
    textAlign(LEFT);
    textSize(18);
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
    
  ///////////// opcoes de resposta
     if(mouseX > opcao1 && mouseX < opcao1 + 60 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
       erro =1;
      escolha =1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao1, yOpcoes, 60, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("5 azuis\n5 verdes", opcao1+5, yOpcoes+10, 50, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("5 azuis\n5 verdes", opcao1+5, yOpcoes+10, 50, 40);
    }
    
    
////outra caixa de opcao
   if(mouseX > opcao2 && mouseX < opcao2 + 60 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro = 1;
      escolha=1;
      console.log(resetarVariaveis());
    
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao2, yOpcoes, 60, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("3 azuis\n3 verdes", opcao2+5, yOpcoes+10, 50, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("3 azuis\n3 verdes", opcao2+5, yOpcoes+10, 50, 40);
    }
    
////outra caixa de opcao(3)
   if(mouseX > opcao3 && mouseX < opcao3 + 60 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =0;
      escolha =0;
      x = 22;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao3, yOpcoes, 60, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("2 azuis\n2 verdes", opcao3+5, yOpcoes+10, 50, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("2 azuis\n2 verdes", opcao3+5, yOpcoes+10, 50, 40);
    }
    if(vida==0){
      varFim=1;
      console.log(resetarVariaveis());
      
    }
    }//timer == 0
  }// fim da tela 22 (1 nivel)
  if(tela == 23){
    background(telaQuestoes);
    textAlign(LEFT);
    textSize(18);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    if(erro == 0){
      textSize(18);
    text("Esse é o 2º caminhão: Temos nele: 20 caixas \nazuis, 10 verdes e 20 vermelhas. Aqui diz que o \nchefe quer METADE do todo. Você sabe o que \nele pediu?" , 10, 210, 400, 200);
      
    textSize(12);
    fill(180);
    text("Nota: \nMetade = dividir por 2" , 10, 145, 200, 200);
      
      
    textSize(18);
    fill(255);
    text("Verdes: 10" , 355, 65, 100, 200);
    text("Vermelhas: 20" , 355, 112, 150, 200);
    text("Azuis: 20" , 355, 160, 150, 200);
    }
    if(erro==1){
      textSize(18);
      text("Acho que não era isso..." , 10, 210, 400, 200);
      if (frameCount % 60 == 0 && timerErro > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
      timerErro --;
      }//fim do contador regressivo do erro
      if(timerErro ==0){
        textSize(18);
        stroke(255);
        fill(100);
        rect(0, 205, 500, 100);
        noStroke();
        fill(255);
        text("Vamos tentar novamente." , 10, 210, 400, 200);
        if (frameCount % 60 == 0 && timerErro2 > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
        timerErro2 --;
        }//fim do contador regressivo do erro2
        if(timerErro2 == 0){
          timerErro =2;
          timerErro2 =2;
          erro =0;
        }
      }// timerErro ==0
    }//fim erro ==1
      
  //text(timer, 10, 20); 
    // apartir daqui posso deixar esse timer "invisivel", ja q o jogador vai passar os 3 segundos lendo. No lugar dele na tela eu coloco o temporizador de 30 segundos(depende da dificuldade).
    
    //aqui vai o tempo que o jogador tem para responder. A dificuldade muda o valor
    textSize(18);
    text(temporizador, 10, 20); 
    if (frameCount % 60 == 0 && temporizador > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    temporizador --;
  }
    if(temporizador ==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
    
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
    noStroke();
    fill(255);
    textSize(18);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
   if(timer!=0){//enquanto nao pode escolher
      textAlign(LEFT); 
      //facil
      textSize(13);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao1, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("25 caixas", opcao1+5, yOpcoes+10, 80, 60);
      //medio

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao2, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("20 caixas", opcao2+5, yOpcoes+10, 80, 60);
      //difícil

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao3, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("50 caixas", opcao3+5, yOpcoes+10, 80, 60);
    }// fim do timer !=0
    
  if (timer == 0) {
    textAlign(LEFT);   
    noStroke();
    fill(255);
    textSize(18);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
  ///////////// (1) opcoes de resposta (começo)
     if(mouseX > opcao1 && mouseX < opcao1 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){ // resposta
      erro = 0;
      escolha=0;
      x = 23;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao1, yOpcoes, 80, 60);
    textAlign(LEFT);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("25 caixas", opcao1+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("25 caixas", opcao1+5, yOpcoes+10, 80, 60);
    }
    
    
////outra caixa de opcao
   if(mouseX > opcao2 && mouseX < opcao2 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha = 1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao2, yOpcoes, 80, 60);
    //textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("20 caixas", opcao2+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("20 caixas", opcao2+5, yOpcoes+10, 80, 60);
    }
    
////outra caixa de opcao(3)
   if(mouseX > opcao3 && mouseX < opcao3 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
      //tela =24; resposta errada, nao troca de tela;
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao3, yOpcoes, 80, 60);
    //textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("50 caixas", opcao3+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("50 caixas", opcao3+5, yOpcoes+10, 80, 60);
    }
    if(vida==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
  }//timer == 0
  }// fim da tela 23 (2 nivel)
  if(tela == 24){
    background(telaQuestoes);
    textAlign(LEFT);
    textSize(18);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    if(erro == 0){
      textSize(16);
    text("Esse é o 3º caminhão: Temos nele: 15 caixas azuis, \n5 verdes e 30 vermelhas. Aqui diz que o chefe quer a QUINTA PARTE da METADE do todo de caixas azuis. Você sabe o que ele pediu?" , 10, 210, 400, 200);
      
    textSize(12);
    fill(180);
    text("Nota: \nQuinta parte = dividir por 5\nMetade = dividir por 2" , 10, 145, 200, 200);
      
      
    textSize(18);
    fill(255);
    text("Verdes: 5" , 355, 65, 100, 200);
    text("Vermelhas: 30" , 355, 112, 150, 200);
    text("Azuis: 15" , 355, 160, 150, 200);

    }
    if(erro==1){
      textSize(18);
      text("Acho que não era isso..." , 10, 210, 400, 200);
      if (frameCount % 60 == 0 && timerErro > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
      timerErro --;
      }//fim do contador regressivo do erro
      if(timerErro ==0){
        textSize(18);
        stroke(255);
        fill(100);
        rect(0, 205, 500, 100);
        noStroke();
        fill(255);
        text("Vamos tentar novamente." , 10, 210, 400, 200);
        if (frameCount % 60 == 0 && timerErro2 > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
        timerErro2 --;
        }//fim do contador regressivo do erro2
        if(timerErro2 == 0){
          timerErro =2;
          timerErro2 =2;
          erro =0;
        }
      }// timerErro ==0
    }//fim erro ==1
      
  //text(timer, 10, 20); 
    // apartir daqui posso deixar esse timer "invisivel", ja q o jogador vai passar os 3 segundos lendo. No lugar dele na tela eu coloco o temporizador de 30 segundos(depende da dificuldade).
    
    //aqui vai o tempo que o jogador tem para responder. A dificuldade muda o valor
    textSize(18);
    text(temporizador, 10, 20); 
    if (frameCount % 60 == 0 && temporizador > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    temporizador --;
  }
    if(temporizador ==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
    
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
    noStroke();
    fill(255);
    textSize(18);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
    if(timer!=0){//enquanto nao pode escolher
      textAlign(LEFT); 
      //facil
      textSize(12);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao1, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("5 caixas \nazuis", opcao1+5, yOpcoes+10, 80, 60);
      //medio

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao2, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("10 caixas \nazuis", opcao2+5, yOpcoes+10, 80, 60);
      //difícil

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao3, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("25 caixas \nazuis", opcao3+5, yOpcoes+10, 80, 60);
    }// fim do timer !=0
    
  if (timer == 0) {
    textAlign(LEFT);   
    noStroke();
    fill(255);
    textSize(18);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
  ///////////// (1)opcoes de resposta (começo)
     if(mouseX > opcao1 && mouseX < opcao1 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){ // resposta
      erro = 0;
      escolha=0;
      x = 24;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao1, yOpcoes, 80, 60);
    textAlign(LEFT);
    textSize(12);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("5 caixas \nazuis", opcao1+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("5 caixas \nazuis", opcao1+5, yOpcoes+10, 80, 60);
    }
    
    
////outra caixa de opcao
   if(mouseX > opcao2 && mouseX < opcao2 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
      //tela =24; só mudar a tela quando acerta? acho que é uma boa.
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao2, yOpcoes, 80, 60);
    //textAlign(CENTER);
    textSize(12);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("10 caixas \nazuis", opcao2+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("10 caixas \nazuis", opcao2+5, yOpcoes+10, 80, 60);
    }
    
////outra caixa de opcao(3)
   if(mouseX > opcao3 && mouseX < opcao3 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
      //tela =24; resposta errada, nao troca de tela;
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao3, yOpcoes, 80, 60);
    //textAlign(CENTER);
    textSize(12);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("25 caixas \nazuis", opcao3+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("25 caixas \nazuis", opcao3+5, yOpcoes+10, 80, 60);
    }
    if(vida==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
  }//timer == 0
  }// fim da tela 24 (3 nivel)
  if(tela == 25){
    background(telaQuestoes);
    textAlign(LEFT);
    textSize(14);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    if(erro==0){
    text("Esse é o 4º caminhão: Temos 60 caixas nele, sendo 20 de cada tipo(azul, verde e vermelha). Aqui diz que o chefe NÃO quer: \nUM QUARTO das azuis, mas quer o resto todo. Qual a \nquantidade de caixas que vamos enviar AO TODO?" , 10, 210, 400, 200);
      
    textSize(12);
    fill(180);
    text("Nota: \nQuarta parte = dividir por 4" , 10, 145, 200, 200);
      
      
    textSize(18);
    fill(255);
    text("Verdes: 20" , 355, 65, 100, 200);
    text("Vermelhas: 20" , 355, 112, 150, 200);
    text("Azuis: 20" , 355, 160, 150, 200);

    }//erro==0; end
    if(erro==1){
      textSize(18);
      text("Acho que não era isso..." , 10, 210, 400, 200);
      if (frameCount % 60 == 0 && timerErro > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
      timerErro --;
      }//fim do contador regressivo do erro
      if(timerErro ==0){
        textSize(18);
        stroke(255);
        fill(100);
        rect(0, 205, 500, 100);
        noStroke();
        fill(255);
        text("Vamos tentar novamente." , 10, 210, 400, 200);
        if (frameCount % 60 == 0 && timerErro2 > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
        timerErro2 --;
        }//fim do contador regressivo do erro2
        if(timerErro2 == 0){
          timerErro =2;
          timerErro2 =2;
          erro =0;
        }
      }// timerErro ==0
    }//fim erro ==1


  //text(timer, 10, 20); 
    // apartir daqui posso deixar esse timer "invisivel", ja q o jogador vai passar os 3 segundos lendo. No lugar dele na tela eu coloco o temporizador de 30 segundos(depende da dificuldade).
    textSize(18);
    text(temporizador, 10, 20); 
    if (frameCount % 60 == 0 && temporizador > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    temporizador --;
  }
    if(temporizador ==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
    
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
    if(timer!=0){//enquanto nao pode escolher
      textAlign(CENTER); 
      //facil
      textSize(13);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao1, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("35 caixas", opcao1+5, yOpcoes+20, 60, 40);
      //medio

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao2+5, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("45 caixas", opcao2+8, yOpcoes+20, 60, 40);
      //difícil

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao3+5, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("55 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }// fim do timer !=0
    
  if (timer == 0) {
    textAlign(LEFT);
    textSize(18);
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
  ///////////// (1)opcoes de resposta (começo)
     if(mouseX > opcao1 && mouseX < opcao1 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao1, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("35 caixas", opcao1+5, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("35 caixas", opcao1+5, yOpcoes+20, 60, 40);
    }
    
    
////outra caixa de opcao
   if(mouseX > opcao2 && mouseX < opcao2 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao2+5, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("45 caixas", opcao2+8, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("45 caixas", opcao2+8, yOpcoes+20, 60, 40);
    }
    
////outra caixa de opcao(3)
   if(mouseX > opcao3 && mouseX < opcao3 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){//resposta
      erro = 0;
      escolha=0;
      x = 25;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao3+5, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("55 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("55 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }
    if(vida==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
  }//timer == 0
  }// fim da tela 25 (4 nivel)
  if(tela == 26){
    background(telaQuestoes);
    textAlign(LEFT);
    textSize(14);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    if(erro==0){
    text("Esse é o 5º caminhão: Temos 100 caixas nele, sendo 50 azuis e 30 vermelhas, e o restante verde. Aqui diz que o chefe QUER: UM QUINTO das azuis e METADE das verde. Qual a \nquantidade de caixas que vamos enviar AO TODO?" , 10, 210, 400, 200);
      
    textSize(12);
    fill(180);
    text("Nota: \nQuinta parte = dividir por 5\nMetade = dividir por 2" , 10, 145, 200, 200);
      
      
    textSize(18);
    fill(255);
    text("Verdes: ???" , 355, 65, 100, 200);
    text("Vermelhas: 30" , 355, 112, 150, 200);
    text("Azuis: 50" , 355, 160, 150, 200);

    }//erro==0; end
    if(erro==1){
      textSize(18);
      text("Acho que não era isso..." , 10, 210, 400, 200);
      if (frameCount % 60 == 0 && timerErro > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
      timerErro --;
      }//fim do contador regressivo do erro
      if(timerErro ==0){
        textSize(18);
        stroke(255);
        fill(100);
        rect(0, 205, 500, 100);
        noStroke();
        fill(255);
        text("Vamos tentar novamente." , 10, 210, 400, 200);
        if (frameCount % 60 == 0 && timerErro2 > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
        timerErro2 --;
        }//fim do contador regressivo do erro2
        if(timerErro2 == 0){
          timerErro =2;
          timerErro2 =2;
          erro =0;
        }
      }// timerErro ==0
    }//fim erro ==1


  //text(timer, 10, 20); 
    // apartir daqui posso deixar esse timer "invisivel", ja q o jogador vai passar os 3 segundos lendo. No lugar dele na tela eu coloco o temporizador de 30 segundos(depende da dificuldade).
    textSize(18);
    text(temporizador, 10, 20); 
    if (frameCount % 60 == 0 && temporizador > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    temporizador --;
  }
    if(temporizador ==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
    
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
    if(timer!=0){//enquanto nao pode escolher
      textAlign(CENTER); 
      //facil
      textSize(13);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao1, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("20 caixas", opcao1+5, yOpcoes+20, 60, 40);
      //medio

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao2, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("40 caixas", opcao2+8, yOpcoes+20, 60, 40);
      //difícil

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao3, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("10 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }// fim do timer !=0
    
  if (timer == 0) {
    textAlign(LEFT);
    textSize(18);
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
  ///////////// (1)opcoes de resposta (começo)
     if(mouseX > opcao1 && mouseX < opcao1 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =0;
      escolha =0;
      x = 26;
      console.log(resetarVariaveis());
      tela = proxTela;
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao1, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("20 caixas", opcao1+5, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("20 caixas", opcao1+5, yOpcoes+20, 60, 40);
    }
    
    
////outra caixa de opcao
   if(mouseX > opcao2 && mouseX < opcao2 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro = 1;
      escolha=1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao2+5, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("40 caixas", opcao2+8, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("40 caixas", opcao2+8, yOpcoes+20, 60, 40);
    }
    
////outra caixa de opcao(3)
   if(mouseX > opcao3 && mouseX < opcao3 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){//resposta
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao3+5, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("10 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("10 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }
    if(vida==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
  }//timer == 0
  }// fim da tela 26 (5 nivel)
  if(tela == 30){
     background(telaAcertou);
    textAlign(LEFT);
    textSize(18);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    text("Era isso mesmo! Vamos ao próximo caminhão" , 10, 210, 400, 200);
    
     if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }

     if(timer!=0){//enquanto nao pode escolher
      textAlign(LEFT);
      textSize(12);
      text(timer + "   << espere para escolher", 10, 15);
      textAlign(CENTER); 
      textSize(18);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(xsetaSeta + 40, ysetaSeta, 60, 20);
      noStroke();
      fill(color('#777777'));
      text(">>", xsetaSeta + 70, ysetaSeta + 17);
    }
    
  if (timer == 0) {
   textAlign(LEFT);
    textSize(12);
    text("Pode escolher!", 10, 15);
    textSize(18);
    textAlign(CENTER);
  
    //mouse em cima do botao de passar conversa:
    if(mouseX > xsetaSeta + 40 && mouseX < xsetaSeta + 100 && mouseY > ysetaSeta && mouseY < ysetaSeta + 30){

    stroke(color('#22E62C')); //cor da borda
    fill(color('#7ACB7E')); //cor do fundo
    
      if(mouseIsPressed){
        tela=proxTela;
        timer = 3;
      }
      test = 1;
    }
    else{
      stroke(color('#38C13F'));
      fill(color('#BAD7BC'));
      test=0;
    }
    rect(xsetaSeta + 40, ysetaSeta, 60, 20);
    textAlign(CENTER);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#38C13F'));
    text(">>", xsetaSeta + 70, ysetaSeta + 17);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text(">>", xsetaSeta + 70, ysetaSeta + 17);
    }
  }//fim do timer == 0
  }// tela dizendo que acertou 
}//fim dificuldade 2  
  
if(dificuldade ==3){
  if(tela == 22){
    background(telaQuestoes);
    textAlign(LEFT);
    textSize(18);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    if(erro==0){
    text("Então vamos lá. Esse caminhão veio com 30 \ncaixas, sendo metade azul e metade verde. O \nchefe quer UM QUINTO de cada tipo... Você tem alguma ideia do quanto ele quer?" , 10, 210, 400, 200);
      
      
    textSize(12);
    fill(180);
    text("Nota: \nQuinta parte = dividir por 5" , 10, 170, 200, 200);
      
      
    textSize(18);
    fill(255);
    text("Verdes: 15" , 355, 65, 100, 200);
    text("Vermelhas: 0" , 355, 112, 150, 200);
    text("Azuis: 15" , 355, 160, 150, 200);
    }//erro==0; end
    if(erro==1){
      
      text("Acho que não era isso..." , 10, 210, 400, 200);
      if (frameCount % 60 == 0 && timerErro > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
      timerErro --;
      }//fim do contador regressivo do erro
      if(timerErro ==0){
        textSize(18);
        stroke(255);
        fill(100);
        rect(0, 205, 500, 100);
        noStroke();
        fill(255);
        text("Vamos tentar novamente." , 10, 210, 400, 200);
        if (frameCount % 60 == 0 && timerErro2 > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
        timerErro2 --;
        }//fim do contador regressivo do erro2
        if(timerErro2 == 0){
          timerErro =2;
          timerErro2 =2;
          erro =0;
        }
      }// timerErro ==0
    }//fim erro ==1


  //text(timer, 10, 20); 
    // apartir daqui posso deixar esse timer "invisivel", ja q o jogador vai passar os 3 segundos lendo. No lugar dele na tela eu coloco o temporizador de 30 segundos(depende da dificuldade).
    text(temporizador, 10, 20); 
    if (frameCount % 60 == 0 && temporizador > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    temporizador --;
  }
    if(temporizador ==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
    
    textAlign(LEFT);
    textSize(18);
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
    ////////////////coloquei um while aqui
    
    if(timer!=0){//enquanto nao pode escolher
      if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
      textAlign(CENTER); 
      //facil
      textSize(13);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao1, yOpcoes, 60, 50);
      noStroke();
      fill(color('#777777'));
      text("5 azuis\n5 verdes", opcao1+5, yOpcoes+10, 50, 40);
      //medio

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao2, yOpcoes, 60, 50);
      noStroke();
      fill(color('#777777'));
      text("3 azuis\n3 verdes", opcao2+5, yOpcoes+10, 50, 40);
      //difícil

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao3, yOpcoes, 60, 50);
      noStroke();
      fill(color('#777777'));
      text("1 azuis\n5 verdes", opcao3+5, yOpcoes+10, 50, 40);
    }
   
    if(timer ==0){
    textAlign(LEFT);
    textSize(18);
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
    
  ///////////// opcoes de resposta
     if(mouseX > opcao1 && mouseX < opcao1 + 60 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
       erro =1;
      escolha =1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao1, yOpcoes, 60, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("5 azuis\n5 verdes", opcao1+5, yOpcoes+10, 50, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("5 azuis\n5 verdes", opcao1+5, yOpcoes+10, 50, 40);
    }
    
    
////outra caixa de opcao
   if(mouseX > opcao2 && mouseX < opcao2 + 60 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro = 0;
      escolha=0;
      x = 22;
      console.log(resetarVariaveis());
    
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao2, yOpcoes, 60, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("3 azuis\n3 verdes", opcao2+5, yOpcoes+10, 50, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("3 azuis\n3 verdes", opcao2+5, yOpcoes+10, 50, 40);
    }
    
////outra caixa de opcao(3)
   if(mouseX > opcao3 && mouseX < opcao3 + 60 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao3, yOpcoes, 60, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("1 azuis\n5 verdes", opcao3+5, yOpcoes+10, 50, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("1 azuis\n5 verdes", opcao3+5, yOpcoes+10, 50, 40);
    }
    if(vida==0){
      varFim=1;
      console.log(resetarVariaveis());
      
    }
    }//timer == 0
  }// fim da tela 22 (1 nivel)
  if(tela == 23){
    background(telaQuestoes);
    textAlign(LEFT);
    textSize(18);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    if(erro == 0){
      textSize(14);
    text("Esse é o 2º caminhão: Temos nele: 20 caixas azuis, 10 verdes e 20 vermelhas. Aqui diz que o chefe quer UM QUINTO do todo, mas que OBRIGATORIAMENTE tem que ter METADE das \nverdes e a DÉCIMA PARTE das vermelhas. Você sabe o que \nele pediu?" , 10, 210, 400, 200);
      
    textSize(12);
    fill(180);
    text("Nota: \nQuinta parte = dividir por 5\nMetade = dividir por 2\nDecima parte = dividir por 10" , 10, 145, 200, 200);
      
      
    textSize(18);
    fill(255);
    text("Verdes: 10" , 355, 65, 100, 200);
    text("Vermelhas: 20" , 355, 112, 150, 200);
    text("Azuis: 20" , 355, 160, 150, 200);
    }
    if(erro==1){
      textSize(18);
      text("Acho que não era isso..." , 10, 210, 400, 200);
      if (frameCount % 60 == 0 && timerErro > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
      timerErro --;
      }//fim do contador regressivo do erro
      if(timerErro ==0){
        textSize(18);
        stroke(255);
        fill(100);
        rect(0, 205, 500, 100);
        noStroke();
        fill(255);
        text("Vamos tentar novamente." , 10, 210, 400, 200);
        if (frameCount % 60 == 0 && timerErro2 > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
        timerErro2 --;
        }//fim do contador regressivo do erro2
        if(timerErro2 == 0){
          timerErro =2;
          timerErro2 =2;
          erro =0;
        }
      }// timerErro ==0
    }//fim erro ==1
      
  //text(timer, 10, 20); 
    // apartir daqui posso deixar esse timer "invisivel", ja q o jogador vai passar os 3 segundos lendo. No lugar dele na tela eu coloco o temporizador de 30 segundos(depende da dificuldade).
    
    //aqui vai o tempo que o jogador tem para responder. A dificuldade muda o valor
    textSize(18);
    text(temporizador, 10, 20); 
    if (frameCount % 60 == 0 && temporizador > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    temporizador --;
  }
    if(temporizador ==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
    
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
    noStroke();
    fill(255);
    textSize(18);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
   if(timer!=0){//enquanto nao pode escolher
      textAlign(LEFT); 
      //facil
      textSize(13);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao1, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("5 verdes\n3 azuis\n2 vermelhas", opcao1+5, yOpcoes+10, 80, 60);
      //medio

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao2, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("3 azuis\n3 verdes\n3 vermelhas", opcao2+5, yOpcoes+10, 80, 60);
      //difícil

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao3, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("5 azuis\n3 vermelhas\n2 verdes", opcao3+5, yOpcoes+10, 80, 60);
    }// fim do timer !=0
    
  if (timer == 0) {
    textAlign(LEFT);   
    noStroke();
    fill(255);
    textSize(18);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
  ///////////// (1) opcoes de resposta (começo)
     if(mouseX > opcao1 && mouseX < opcao1 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){ // resposta
      erro = 0;
      escolha=0;
      x = 23;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao1, yOpcoes, 80, 60);
    textAlign(LEFT);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("5 verdes\n3 azuis\n2 vermelhas", opcao1+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("5 verdes\n3 azuis\n2 vermelhas", opcao1+5, yOpcoes+10, 80, 60);
    }
    
    
////outra caixa de opcao
   if(mouseX > opcao2 && mouseX < opcao2 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha = 1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao2, yOpcoes, 80, 60);
    //textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("3 azuis\n3 verdes\n3 vermelhas", opcao2+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("3 azuis\n3 verdes\n3 vermelhas", opcao2+5, yOpcoes+10, 80, 60);
    }
    
////outra caixa de opcao(3)
   if(mouseX > opcao3 && mouseX < opcao3 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
      //tela =24; resposta errada, nao troca de tela;
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao3, yOpcoes, 80, 60);
    //textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("5 azuis\n3 vermelhas\n2 verdes", opcao3+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("5 azuis\n3 vermelhas\n2 verdes", opcao3+5, yOpcoes+10, 80, 60);
    }
    if(vida==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
  }//timer == 0
  }// fim da tela 23 (2 nivel)
  if(tela == 24){
    background(telaQuestoes);
    textAlign(LEFT);
    textSize(18);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    if(erro == 0){
      textSize(14);
    text("Esse é o 3º caminhão: Temos nele: 15 caixas azuis, 5 verdes e 40 vermelhas. Aqui diz que o chefe quer UM TERÇO do todo, \nmas que OBRIGATORIAMENTE tem que ter UM TERÇO das \nazuis e a QUARTA PARTE das vermelhas. Você sabe o que ele pediu?" , 10, 210, 400, 200);
      
    textSize(12);
    fill(180);
    text("Nota: \nUm terço = dividir por 3\nQuarta parte = dividir por 4" , 10, 145, 200, 200);
      
      
    textSize(18);
    fill(255);
    text("Verdes: 5" , 355, 65, 100, 200);
    text("Vermelhas: 40" , 355, 112, 150, 200);
    text("Azuis: 15" , 355, 160, 150, 200);

    }
    if(erro==1){
      textSize(18);
      text("Acho que não era isso..." , 10, 210, 400, 200);
      if (frameCount % 60 == 0 && timerErro > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
      timerErro --;
      }//fim do contador regressivo do erro
      if(timerErro ==0){
        textSize(18);
        stroke(255);
        fill(100);
        rect(0, 205, 500, 100);
        noStroke();
        fill(255);
        text("Vamos tentar novamente." , 10, 210, 400, 200);
        if (frameCount % 60 == 0 && timerErro2 > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
        timerErro2 --;
        }//fim do contador regressivo do erro2
        if(timerErro2 == 0){
          timerErro =2;
          timerErro2 =2;
          erro =0;
        }
      }// timerErro ==0
    }//fim erro ==1
      
  //text(timer, 10, 20); 
    // apartir daqui posso deixar esse timer "invisivel", ja q o jogador vai passar os 3 segundos lendo. No lugar dele na tela eu coloco o temporizador de 30 segundos(depende da dificuldade).
    
    //aqui vai o tempo que o jogador tem para responder. A dificuldade muda o valor
    textSize(18);
    text(temporizador, 10, 20); 
    if (frameCount % 60 == 0 && temporizador > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    temporizador --;
  }
    if(temporizador ==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
    
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
    noStroke();
    fill(255);
    textSize(18);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
    if(timer!=0){//enquanto nao pode escolher
      textAlign(LEFT); 
      //facil
      textSize(12);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao1, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("5 verdes\n5 azuis\n10 vermelhas", opcao1+5, yOpcoes+10, 80, 60);
      //medio

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao2, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("10 azuis\n5 verdes\n5 vermelhas", opcao2+5, yOpcoes+10, 80, 60);
      //difícil

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao3, yOpcoes, 80, 60);
      noStroke();
      fill(color('#777777'));
      text("10 azuis\n10 vermelhas\n0 verdes", opcao3+5, yOpcoes+10, 80, 60);
    }// fim do timer !=0
    
  if (timer == 0) {
    textAlign(LEFT);   
    noStroke();
    fill(255);
    textSize(18);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
  ///////////// (1)opcoes de resposta (começo)
     if(mouseX > opcao1 && mouseX < opcao1 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){ // resposta
      erro = 0;
      escolha=0;
      x = 24;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao1, yOpcoes, 80, 60);
    textAlign(LEFT);
    textSize(12);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("5 verdes\n5 azuis\n10 vermelhas", opcao1+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("5 verdes\n5 azuis\n10 vermelhas", opcao1+5, yOpcoes+10, 80, 60);
    }
    
    
////outra caixa de opcao
   if(mouseX > opcao2 && mouseX < opcao2 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
      //tela =24; só mudar a tela quando acerta? acho que é uma boa.
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao2, yOpcoes, 80, 60);
    //textAlign(CENTER);
    textSize(12);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("10 azuis\n5 verdes\n5 vermelhas", opcao2+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("10 azuis\n5 verdes\n5 vermelhas", opcao2+5, yOpcoes+10, 80, 60);
    }
    
////outra caixa de opcao(3)
   if(mouseX > opcao3 && mouseX < opcao3 + 80 && mouseY > yOpcoes && mouseY < yOpcoes + 60){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
      //tela =24; resposta errada, nao troca de tela;
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao3, yOpcoes, 80, 60);
    //textAlign(CENTER);
    textSize(12);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("10 azuis\n10 vermelhas\n0 verdes", opcao3+5, yOpcoes+10, 80, 60);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("10 azuis\n10 vermelhas\n0 verdes", opcao3+5, yOpcoes+10, 80, 60);
    }
    if(vida==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
  }//timer == 0
  }// fim da tela 24 (3 nivel)
  if(tela == 25){
    background(telaQuestoes);
    textAlign(LEFT);
    textSize(14);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    if(erro==0){
    text("Esse é o 4º caminhão: Temos 60 caixas nele, sendo 20 de cada tipo(azul, verde e vermelha). Aqui diz que o chefe NÃO quer: \nUM QUARTO das azuis, METADE das verde e UM QUINTO \ndas vermelhas. Qual a quantidade de caixas que vamos enviar AO TODO?" , 10, 210, 400, 200);
      
    textSize(12);
    fill(180);
    text("Nota: \nQuinta parte = dividir por 5\nMetade = dividir por 2\nQuarta parte = dividir por 4" , 10, 145, 200, 200);
      
      
    textSize(18);
    fill(255);
    text("Verdes: 20" , 355, 65, 100, 200);
    text("Vermelhas: 20" , 355, 112, 150, 200);
    text("Azuis: 20" , 355, 160, 150, 200);

    }//erro==0; end
    if(erro==1){
      
      text("Acho que não era isso..." , 10, 210, 400, 200);
      if (frameCount % 60 == 0 && timerErro > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
      timerErro --;
      }//fim do contador regressivo do erro
      if(timerErro ==0){
        textSize(18);
        stroke(255);
        fill(100);
        rect(0, 205, 500, 100);
        noStroke();
        fill(255);
        text("Vamos tentar novamente." , 10, 210, 400, 200);
        if (frameCount % 60 == 0 && timerErro2 > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
        timerErro2 --;
        }//fim do contador regressivo do erro2
        if(timerErro2 == 0){
          timerErro =2;
          timerErro2 =2;
          erro =0;
        }
      }// timerErro ==0
    }//fim erro ==1


  //text(timer, 10, 20); 
    // apartir daqui posso deixar esse timer "invisivel", ja q o jogador vai passar os 3 segundos lendo. No lugar dele na tela eu coloco o temporizador de 30 segundos(depende da dificuldade).
    textSize(18);
    text(temporizador, 10, 20); 
    if (frameCount % 60 == 0 && temporizador > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    temporizador --;
  }
    if(temporizador ==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
    
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
    if(timer!=0){//enquanto nao pode escolher
      textAlign(CENTER); 
      //facil
      textSize(13);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao1, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("22 caixas", opcao1+5, yOpcoes+20, 60, 40);
      //medio

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao2+5, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("30 caixas", opcao2+8, yOpcoes+20, 60, 40);
      //difícil

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao3+5, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("41 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }// fim do timer !=0
    
  if (timer == 0) {
    textAlign(LEFT);
    textSize(18);
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
  ///////////// (1)opcoes de resposta (começo)
     if(mouseX > opcao1 && mouseX < opcao1 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao1, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("22 caixas", opcao1+5, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("22 caixas", opcao1+5, yOpcoes+20, 60, 40);
    }
    
    
////outra caixa de opcao
   if(mouseX > opcao2 && mouseX < opcao2 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao2+5, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("30 caixas", opcao2+8, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("30 caixas", opcao2+8, yOpcoes+20, 60, 40);
    }
    
////outra caixa de opcao(3)
   if(mouseX > opcao3 && mouseX < opcao3 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){//resposta
      erro = 0;
      escolha=0;
      x = 25;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao3+5, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("41 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("41 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }
    if(vida==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
  }//timer == 0
  }// fim da tela 25 (4 nivel)
  if(tela == 26){
    background(telaQuestoes);
    textAlign(LEFT);
    textSize(14);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    if(erro==0){
    text("Esse é o 5º caminhão: Temos 100 caixas nele, sendo 20 azuis e 20 vermelhas, e o restante verde. Aqui diz que o chefe QUER: UM QUARTO das azuis, METADE das verde e UM QUINTO \ndas vermelhas. Qual a quantidade de caixas que vamos enviar AO TODO?" , 10, 210, 400, 200);
      
    textSize(12);
    fill(180);
    text("Nota: \nQuinta parte = dividir por 5\nMetade = dividir por 2\nQuarta parte = dividir por 4" , 10, 145, 200, 200);
      
      
    textSize(18);
    fill(255);
    text("Verdes: ???" , 355, 65, 100, 200);
    text("Vermelhas: 20" , 355, 112, 150, 200);
    text("Azuis: 20" , 355, 160, 150, 200);

    }//erro==0; end
    if(erro==1){
      
      text("Acho que não era isso..." , 10, 210, 400, 200);
      if (frameCount % 60 == 0 && timerErro > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
      timerErro --;
      }//fim do contador regressivo do erro
      if(timerErro ==0){
        textSize(18);
        stroke(255);
        fill(100);
        rect(0, 205, 500, 100);
        noStroke();
        fill(255);
        text("Vamos tentar novamente." , 10, 210, 400, 200);
        if (frameCount % 60 == 0 && timerErro2 > 0) { // if the frameCount is      divisible by 60, then a second has passed. it will stop at 0
        timerErro2 --;
        }//fim do contador regressivo do erro2
        if(timerErro2 == 0){
          timerErro =2;
          timerErro2 =2;
          erro =0;
        }
      }// timerErro ==0
    }//fim erro ==1


  //text(timer, 10, 20); 
    // apartir daqui posso deixar esse timer "invisivel", ja q o jogador vai passar os 3 segundos lendo. No lugar dele na tela eu coloco o temporizador de 30 segundos(depende da dificuldade).
    textSize(18);
    text(temporizador, 10, 20); 
    if (frameCount % 60 == 0 && temporizador > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    temporizador --;
  }
    if(temporizador ==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
    
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
    if(timer!=0){//enquanto nao pode escolher
      textAlign(CENTER); 
      //facil
      textSize(13);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao1, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("36 caixas", opcao1+5, yOpcoes+20, 60, 40);
      //medio

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao2, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("39 caixas", opcao2+8, yOpcoes+20, 60, 40);
      //difícil

      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(opcao3, yOpcoes, 70, 50);
      noStroke();
      fill(color('#777777'));
      text("30 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }// fim do timer !=0
    
  if (timer == 0) {
    textAlign(LEFT);
    textSize(18);
    noStroke();
    fill(255);
    text("vidas: ", 220, 20);
    text(vida, 280, 20);
    
  ///////////// (1)opcoes de resposta (começo)
     if(mouseX > opcao1 && mouseX < opcao1 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao1, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("36 caixas", opcao1+5, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("36 caixas", opcao1+5, yOpcoes+20, 60, 40);
    }
    
    
////outra caixa de opcao
   if(mouseX > opcao2 && mouseX < opcao2 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){
      erro = 0;
      escolha=0;
      x = 26;
      console.log(resetarVariaveis());
      tela = proxTela;
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao2+5, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("39 caixas", opcao2+8, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("39 caixas", opcao2+8, yOpcoes+20, 60, 40);
    }
    
////outra caixa de opcao(3)
   if(mouseX > opcao3 && mouseX < opcao3 + 70 && mouseY > yOpcoes && mouseY < yOpcoes + 50){
    stroke(color('#FFCB0F')); //cor da borda
    fill(color('#F5C92D')); //cor do fundo
    if(mouseIsPressed){//resposta
      erro =1;
      escolha =1;
      console.log(resetarVariaveis());
    }
       test =1;
    }
    else{
      stroke(color('#E1BD3B'));
      fill(color('#FDF7D2'));
      test=0;
    }
    rect(opcao3+5, yOpcoes, 70, 50);
    textAlign(CENTER);
    textSize(13);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#E1BD3B'));
    text("30 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("30 caixas", opcao3+8, yOpcoes+20, 60, 40);
    }
    if(vida==0){
      varFim=1;
      console.log(resetarVariaveis());
    }
  }//timer == 0
  }// fim da tela 26 (5 nivel)
  if(tela == 30){
     background(telaAcertou);
    textAlign(LEFT);
    textSize(18);
    stroke(200);
    fill(100);
    rect(0, 205, 500, 100);
    

    noStroke();
    fill(255);
    text("Era isso mesmo! Vamos ao próximo caminhão" , 10, 210, 400, 200);
    
     if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }

     if(timer!=0){//enquanto nao pode escolher
      textAlign(LEFT);
      textSize(12);
      text(timer + "   << espere para escolher", 10, 15);
      textAlign(CENTER); 
      textSize(18);
      stroke(color('#898989'));
      fill(color('#AAAAAA'));
      rect(xsetaSeta + 40, ysetaSeta, 60, 20);
      noStroke();
      fill(color('#777777'));
      text(">>", xsetaSeta + 70, ysetaSeta + 17);
    }
    
  if (timer == 0) {
   textAlign(LEFT);
    textSize(12);
    text("Pode escolher!", 10, 15);
    textSize(18);
    textAlign(CENTER);
  
    //mouse em cima do botao de passar conversa:
    if(mouseX > xsetaSeta + 40 && mouseX < xsetaSeta + 100 && mouseY > ysetaSeta && mouseY < ysetaSeta + 30){

    stroke(color('#22E62C')); //cor da borda
    fill(color('#7ACB7E')); //cor do fundo
    
      if(mouseIsPressed){
        tela=proxTela;
        timer = 3;
      }
      test = 1;
    }
    else{
      stroke(color('#38C13F'));
      fill(color('#BAD7BC'));
      test=0;
    }
    rect(xsetaSeta + 40, ysetaSeta, 60, 20);
    textAlign(CENTER);
    if(test == 0){ 
    //quando NÃO ta com mouse em cima
    noStroke();
    fill(color('#38C13F'));
    text(">>", xsetaSeta + 70, ysetaSeta + 17);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text(">>", xsetaSeta + 70, ysetaSeta + 17);
    }
  }//fim do timer == 0
  }// tela dizendo que acertou
}//fim dificuldade 3
  
  if(tela == 99){
    // tela de fim de jogo
    background(telaDerrota);
    textAlign(CENTER);
    textSize(36);
    fill(color('#FF2327'));
    text("Fim de jogo", 250, 70);
    
    fill(255);
    textSize(16);
    if(temporizador == 0){
    text("Infelizmente nosso tempo acabou, tenho que \nvoltar para o escritório assim mesmo. Sou grato pela sua ajuda!", 70, 100, 350, 300);
    }
    if(vida==0){
      text("Erramos muitas vezes, o chefe ficou irritado. Vou ter que voltar para o escritório assim mesmo. \nSou grato pela sua ajuda!", 70, 100, 350, 300);
    }
    
    image(charPerdeu, 300, 200,60,80);
    
    if(mouseX > xBotaoVoltar -25 && mouseX < xBotaoVoltar + 25 && mouseY > yBotaoVoltar - 25 && mouseY < yBotaoVoltar + 25){

    //circulo botaso voltar
    stroke(color('#A93636')); //cor da borda
    fill(color('#D75555')); //cor do fundo
    
      if(mouseIsPressed){
        tela=1;
        vida=3;
        temporizador = tempoDeJogo;
        somVar=1;
        console.log(resetarSons());
      }
      test = 1;
    }
    else{
      stroke(color('#C72D2D'));
      fill(color('#F19292'));
      test=0;
    }
    ellipse(xBotaoVoltar, yBotaoVoltar, 50);
    if(test == 0){
    noStroke();
    fill(color('#C72D2D'));
    text("voltar", xBotaoVoltar, yBotaoVoltar+2);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("voltar", xBotaoVoltar, yBotaoVoltar+2);
    }
    
  }//fim da tela 99 (GAME OVER)
  if(tela == 100){
    // tela de fim de jogo
    background(telaVitoria);
    textAlign(CENTER);
    stroke(0);
    fill(color('#F9F6E0'));
    rect(50,20,390,260,15);//balao branco
    textSize(36);
    noStroke();
    fill(color('#168F09'));
    text("VITÓRIA!", 250, 70);
    
    textSize(16);
    text("CONSEGUIMOS! Muito obrigado por me ajudar. Sem você eu não conseguiria Hehehe. Agora \npreciso ir, vou voltar para o escritório. Não se \npreocupe, irei mencionar ao meu chefe que tive sua ajuda. Não posso receber todo o crédito \nHaha. Adeus!", 70, 100, 350, 300);
    image(charGanhou, 300, 200,60,80);
    
    if(mouseX > xBotaoVoltar -25 && mouseX < xBotaoVoltar + 25 && mouseY > yBotaoVoltar - 25 && mouseY < yBotaoVoltar + 25){

    //circulo botaso voltar
    stroke(color('#A93636')); //cor da borda
    fill(color('#D75555')); //cor do fundo
    
      if(mouseIsPressed){
        tela=1;
        vida=3;
        temporizador = tempoDeJogo;
        somVar=1;
        console.log(resetarSons());
      }
      test = 1;
    }
    else{
      stroke(color('#C72D2D'));
      fill(color('#F19292'));
      test=0;
    }
    ellipse(xBotaoVoltar, yBotaoVoltar, 50);
    if(test == 0){
    noStroke();
    fill(color('#C72D2D'));
    text("voltar", xBotaoVoltar, yBotaoVoltar+2);
    }
    else{
    noStroke();
    fill(color('#FFFFFF'));
    text("voltar", xBotaoVoltar, yBotaoVoltar+2);
    }
    
  }//fim da tela 100 (VICTORY)
  
  
/////////////////////////////////////////////////
  /*falta no programa:
  (OK) escolher dificuldade; 
  (OK) 5 fases por dificuldade;
  (OK) imagens/gráficos; 
  (--) músicas/efeitos sonoros;
  */
  
}//fim da função draw

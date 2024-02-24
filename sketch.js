var song1;
var song2;
var song3;
var song4;
var song5;
var song6;
var song7; 
var song8;
var song9;
var song10; 
var song11;
var song12;
var song13;
var song14;
var song15;
var song16;
var song17;
var song18;
//var song19;
var song20;
var song21;
var song22;
var song23;
var song24;
var song25;
var song26;
var song27;
var song28;
var song29;
var song30;
var song31;
var song32;
var song33;
var song34;
var song36;
var song37;
var song38;
var song39;
var song40;
var song41;
var song42;
var song43;
var song44;
var song45;
var song46;
var song47;
var song48;
var song49;
var song50;
var song51;
var song52;
var song53;
var song54;
var song55;
var song56;
var song57;
var song58;
var song59;
var song60;
var songC1;
var songC2;
var songC3;
var songO1;
var songO2;
var songO3;
var songL1;
var songL2;
var songT1;
var songT2;
var songT3;
var songT4;
var songR1;
var songR2;
var songR3;
var songR4;
var songB1;
var songB2;
var songB3;
var songN1;
var songN2;
var songN3;
var songN4;
var songW1;
var songW2;
var songW3;
var bg;


function preload() {
  song1 = loadSound("1.mp3");
  song2 = loadSound("2.mp3"); 
  song3 = loadSound("3.mp3");
  song4 = loadSound("4.mp3"); 
  song5 = loadSound("5.mp3"); 
  song6 = loadSound("6.mp3"); 
  song7 = loadSound("7.mp3"); 
  song8 = loadSound("8.mp3"); 
  song9 = loadSound("9.mp3"); 
  song10 = loadSound("10.mp3"); 
  song11 = loadSound("11.mp3");
  song12 = loadSound("12.mp3");  
  song13 = loadSound("13.mp3"); 
  song14 = loadSound("14.mp3"); 
  song15 = loadSound("15.mp3");
  song16 = loadSound("16.mp3"); 
  song17 = loadSound("17.mp3"); 
  song18 = loadSound("18.mp3"); 
  //song19 = loadSound("al.mp3"); 
  song20 = loadSound("20.mp3");
  song21 = loadSound("21.mp3"); 
  song22 = loadSound("22.mp3"); 
  song23 = loadSound("23.mp3"); 
  song24 = loadSound("24.mp3"); 
  song25 = loadSound("25.mp3"); 
  song26 = loadSound("26.mp3"); 
  song27 = loadSound("27.mp3"); 
  song28 = loadSound("28.mp3"); 
  song29 = loadSound("29.mp3"); 
  song30 = loadSound("30.mp3"); 
  song31 = loadSound("31.mp3"); 
  song32 = loadSound("32.mp3"); 
  song33 = loadSound("33.mp3"); 
  song34 = loadSound("34.mp3"); 
  song35 = loadSound("35.mp3"); 
  song36 = loadSound("36.mp3"); 
  song37 = loadSound("37.mp3"); 
  song38 = loadSound("38.mp3"); 
  song39 = loadSound("39.mp3"); 
  song40 = loadSound("40.mp3"); 
  song41 = loadSound("41.mp3");
  song42 = loadSound("42.mp3");
  song43 = loadSound("43.mp3"); 
  song44 = loadSound("44.mp3"); 
  song45 = loadSound("45.mp3"); 
  song46 = loadSound("46.mp3"); 
  song47 = loadSound("47.mp3"); 
  song48 = loadSound("48.mp3"); 
  song49 = loadSound("49.mp3"); 
  song50 = loadSound("50.mp3");
  song51 = loadSound("51.mp3");
  song52 = loadSound("52.mp3"); 
  song53 = loadSound("53.mp3"); 
  song54 = loadSound("54.mp3"); 
  song55 = loadSound("55.mp3"); 
  song56 = loadSound("56.mp3"); 
  song57 = loadSound("57.mp3"); 
  song58 = loadSound("58.mp3"); 
  song59 = loadSound("59.mp3"); 
  song60 = loadSound("60.mp3");
  songC1 = loadSound("C1.mp3");
  songC2 = loadSound("C2.mp3"); 
  songC3 = loadSound("C3.mp3");
  songO1 = loadSound("O1.mp3");
  songO2 = loadSound("O2.mp3");
  songO3 = loadSound("O3.mp3");
  songL1 = loadSound("L1.mp3");
  songL2 = loadSound("L2.mp3");
  songT1 = loadSound("T1.mp3");
  songT2 = loadSound("T2.mp3");
  songT3 = loadSound("T3.mp3");
  songT4 = loadSound("T4.mp3");
  songR1 = loadSound("R1.mp3");
  songR2 = loadSound("R2.mp3");
  songR3 = loadSound("R3.mp3");
  songR4 = loadSound("R4.mp3");
  songB1 = loadSound("B1.mp3");
  songB2 = loadSound("B2.mp3");
  songB3 = loadSound("B3.mp3");
  songN1 = loadSound("N1.mp3");
  songN2 = loadSound("N2.mp3");
  songN3 = loadSound("N3.mp3");
  songN4 = loadSound("N4.mp3");
  songW1 = loadSound("W1.mp3");
  songW2 = loadSound("W2.mp3");
  songW3 = loadSound("W3.mp3");
  bg = loadImage ("MAP.png");
  
  
  songs = [song1,song2,song3,song4,song5,song6,song7,song8,song9,song10,song11,song12,song13,song14,song15,song16,song17,song18,song20,song21,song22,song23,song24,song25,song26,song27,song28,song29,song30,song31,song32,song33,song34,song35,song36,song37,song38,song39,song40,song41,song42,song43,song44,song45,song46,song47,song48,song49,song50,song51,song52,song53,song54,song55,song56,song57,song58, song59, song60,songC1,songC2,songC3,songO1,songO2,songO3,songL1,songL2,songT1,songT2,songT3,songT4,songR1,songR2,songR3,songR4,songB1,songB2,songB3,songN1,songN2,songN3,songN4,songW1,songW2,songW3];
  
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.doubleClicked(stopAllSongs);
  frameRate(10);
}

function translateX(position) {
  ratio = position/2048
  return ratio * windowWidth
}

function stopAllSongs() {
  songs.forEach(function(song) {
    if (song.isPlaying())
        {
          song.stop();
        } 
  })
  
}
function translateY(position) {
  ratio = position/1536
  return ratio * windowHeight
}

function draw() {

  background(bg);

//1
  
  if (mouseX < translateX(96) && mouseX > translateX(50) && mouseY < translateY(142) && mouseY > translateY(56)){
    
    
    text("♫", mouseX, mouseY)
    if (!song1.isPlaying()){
      song1.play();
    }
  }
 
//2

  if (mouseX < translateX(260) && mouseX > translateX(212) && mouseY < translateY(324) && mouseY > translateY(259)){
    text("♫", mouseX, mouseY)
    if (!song2.isPlaying()){
      song2.play();
    }
  }
      

//3
 
  if (mouseX < translateX(374) && mouseX > translateX(300) && mouseY < translateY(497) && mouseY > translateY(390))
    {
    text("♫", mouseX, mouseY)
    if (!song3.isPlaying()){
      song3.play();
    }
  }
      
    
//4
  
  if (mouseX < translateX(549) && mouseX > translateX(487) && mouseY < translateY(675) && mouseY > translateX(574)){
    
    text("♫", mouseX, mouseY)
    if (!song4.isPlaying()){
      song4.play();
    }
  }
  
  
//5

  if (mouseX < translateX(736) && mouseX > translateX(700) && mouseY < translateY(829) && mouseY > translateY(748)){
    text("♫", mouseX, mouseY)
    if (!song5.isPlaying()){
      song5.play();
    }
  }
      
  
//6

  if (mouseX < translateX(1042) && mouseX > translateX(1012) && mouseY < translateY(877) && mouseY > translateY(764)){
    text("♫", mouseX, mouseY)
    if (!song6.isPlaying()){
      song6.play();
    }
  }
      
    
//7

  if (mouseX < translateX(1322) && mouseX > translateX(1263) && mouseY < translateY(872) && mouseY > translateY(824)){
    text("♫", mouseX, mouseY)
    if (!song7.isPlaying()){
      song7.play();
    }
  }
      
//8

  if (mouseX < translateX(174) && mouseX > translateX(131) && mouseY < translateY(261) && mouseY > translateY(209)){
    text("♫", mouseX, mouseY)
    if (!song8.isPlaying()){
      song8.play();
    }
  }
  
//9
  
  if (mouseX < translateX(445) && mouseX > translateX(417) && mouseY < translateY(138) && mouseY > translateY(68)){
    text("♫", mouseX, mouseY)
    if (!song9.isPlaying()){
      song9.play();
    }
  }
      
//10
  
  if (mouseX < translateX(745) && mouseX > translateX(657) && mouseY < translateY(298) && mouseY > translateY(255)){
    text("♫", mouseX, mouseY)
    if (!song10.isPlaying()){
      song10.play();
    }
  }      
     
//11
  
  if (mouseX < translateX(681) && mouseX > translateX(644) && mouseY < translateY(476) && mouseY > translateY(390)){
    text("♫", mouseX, mouseY)
    if (!song11.isPlaying()){
      song11.play();
    }
  }
  

//12
  
  if (mouseX < translateX(529) && mouseX > translateX(488) && mouseY < translateY(447) && mouseY > translateY(368)){
    text("♫", mouseX, mouseY)
    if (!song12.isPlaying()){
      song12.play();
    }
  }
      

 //13

  if (mouseX < translateX(361) && mouseX > translateX(325) && mouseY < translateY(598) && mouseY > translateY(506)){
    text("♫", mouseX, mouseY)
    if (!song13.isPlaying()){
      song13.play();
    }
  }
      
 
//14
  
  if (mouseX < translateX(199) && mouseX > translateX(161) && mouseY < translateY(666) && mouseY > translateY(569)){
    text("♫", mouseX, mouseY)
    if (!song14.isPlaying()){
      song14.play();
    }
  }
      

      
//15
  
  if (mouseX < translateX(285) && mouseX > translateX(235) && mouseY < translateY(1280) && mouseY > translateY(1197)){
    text("♫", mouseX, mouseY)
    if (!song15.isPlaying()){
      song15.play();
    }
  }
 
    
//16
  
  if (mouseX < translateX(258) && mouseX > translateX(217) && mouseY < translateY(1132) && mouseY > translateY(1069)){
    text("♫", mouseX, mouseY)
    if (!song16.isPlaying()){
      song16.play();
    }
  }
  

//17
  
  if (mouseX < translateX(427) && mouseX > translateX(393) && mouseY < translateY(1047) && mouseY > translateY(981)){
    text("♫", mouseX, mouseY)
    if (!song17.isPlaying()){
      song17.play();
    }
  }
      

//18

  if (mouseX < translateX(450) && mouseX > translateX(397) && mouseY < translateY(1225) && mouseY > translateY(1164)){
    text("♫", mouseX, mouseY)
    if (!song18.isPlaying()){
      song18.play();
    }
  }
      

//19

  //if (mouseX < 452 && mouseX > 371 && mouseY < 1365 && mouseY > 1324){
    //text("♫", mouseX, mouseY)
    //if (!song19.isPlaying()){
    //  song19.play();
  //  }
 // }
      
 // if (mouseIsPressed && song19.isPlaying()){ 
    //song19.stop();
  //}
  
//20

  if (mouseX < translateX(355) && mouseX > translateX(321) && mouseY < translateY(1523) && mouseY > translateX(1445)){
    text("♫", mouseX, mouseY)
    if (!song20.isPlaying()){
      song20.play();
    }
  }
      
  
//21

  if (mouseX < translateX(449) && mouseX > translateX(376) && mouseY < translateY(1367) && mouseY > translateY(1319)){
    text("♫", mouseX, mouseY)
    if (!song21.isPlaying()){
      song21.play();
    }
  }
      
  
//22

  if (mouseX < translateX(538) && mouseX > translateX(503) && mouseY < translateY(992) && mouseY > translateY(926)){
    text("♫", mouseX, mouseY)
    if (!song22.isPlaying()){
      song22.play();
    }
  }
      
  
//23

  if (mouseX < translateX(590) && mouseX > translateX(568) && mouseY < translateY(990) && mouseY > translateY(935)){
    text("♫", mouseX, mouseY)
    if (!song23.isPlaying()){
      song23.play();
    }
  }

//24

  if (mouseX < translateX(589) && mouseX > translateX(555) && mouseY < translateY(868) && mouseY > translateY(797)){
    text("♫", mouseX, mouseY)
    if (!song24.isPlaying()){
      song24.play();
    }
  }
      
//25

  if (mouseX < translateX(797) && mouseX > translateX(725) && mouseY < translateY(1064) && mouseY > translateY(995)){
    text("♫", mouseX, mouseY)
    if (!song25.isPlaying()){
      song25.play();
    }
  }
      
//26

  if (mouseX < translateX(801) && mouseX > translateX(732) && mouseY < translateY(1510) && mouseY > translateY(1466)){
    text("♫", mouseX, mouseY)
    if (!song26.isPlaying()){
      song26.play();
    }
  }
      
  
//27

  if (mouseX < translateX(960) && mouseX > translateX(875) && mouseY < translateY(1300) && mouseY > translateY(1264)){
    text("♫", mouseX, mouseY)
    if (!song27.isPlaying()){
      song27.play();
    }
  }
      
  
//28

  if (mouseX < translateX(944) && mouseX > translateX(917) && mouseY < translateY(1120) && mouseY > translateY(1047)){
    text("♫", mouseX, mouseY)
    if (!song28.isPlaying()){
      song28.play();
    }
  }
      
//29

  if (mouseX < translateX(1082) && mouseX > translateX(1056) && mouseY < translateY(1371) && mouseY > translateX(1306)){
    text("♫", mouseX, mouseY)
    if (!song29.isPlaying()){
      song29.play();
    }
  }
      
  
//30

  if (mouseX < translateX(1174) && mouseX > translateX(1109) && mouseY < translateY(1532) && mouseY > translateY(1456)){
    text("♫", mouseX, mouseY)
    if (!song30.isPlaying()){
      song30.play();
    }
  }
      
  
//31

  if (mouseX < translateX(1445) && mouseX > translateX(1359) && mouseY < translateY(1474) && mouseY > translateY(1409)){
    text("♫", mouseX, mouseY)
    if (!song31.isPlaying()){
      song31.play();
    }
  }
      
//32

  if (mouseX < translateX(1483) && mouseX > translateX(1457) && mouseY < translateY(1178) && mouseY > translateY(1115)){
    text("♫", mouseX, mouseY)
    if (!song32.isPlaying()){
      song32.play();
    }
  }
      
  
//33

  if (mouseX < translateX(1564) && mouseX > translateX(1478) && mouseY < translateY(1450) && mouseY > translateY(1427)){
    text("♫", mouseX, mouseY)
    if (!song33.isPlaying()){
      song33.play();
    }
  }
  
//34

  if (mouseX < translateX(1008) && mouseX > translateX(959) && mouseY < translateY(1448) && mouseY > translateY(1370)){
    text("♫", mouseX, mouseY)
    if (!song34.isPlaying()){
      song34.play();
    }
  }

  
//35

  if (mouseX < translateX(1292) && mouseX > translateX(1241) && mouseY < translateY(1132) && mouseY > translateY(1063)){
    text("♫", mouseX, mouseY)
    if (!song35.isPlaying()){
      song35.play();
    }
  }

  
//36

  if (mouseX < translateX(1571) && mouseX > translateX(1548) && mouseY < translateY(1048) && mouseY > translateY(979)){
    text("♫", mouseX, mouseY)
    if (!song36.isPlaying()){
      song36.play();
    }
  }
      
//37

  if (mouseX < translateX(1978) && mouseX > translateX(1899) && mouseY < translateY(897) && mouseY > translateY(832)){
    text("♫", mouseX, mouseY)
    if (!song37.isPlaying()){
      song37.play();
    }
  }
      
  //38

  if (mouseX < translateX(1970) && mouseX > translateX(1897) && mouseY < translateY(116) && mouseY > translateY(68)){
    text("♫", mouseX, mouseY)
    if (!song38.isPlaying()){
      song38.play();
    }
  }
      
  //39

  if (mouseX < translateX(1088) && mouseX > translateX(1029) && mouseY < translateY(330) && mouseY > translateX(262)){
    text("♫", mouseX, mouseY)
    if (!song39.isPlaying()){
      song39.play();
    }
  }

  
  //40

  if (mouseX < translateX(1326) && mouseX > translateX(1285) && mouseY < translateY(363) && mouseY > translateY(311)){
    text("♫", mouseX, mouseY)
    if (!song40.isPlaying()){
      song40.play();
    }
  }
      

  //41

  if (mouseX < translateX(1336) && mouseX > translateX(1274) && mouseY < translateY(683) && mouseY > translateX(615)){
    text("♫", mouseX, mouseY)
    if (!song41.isPlaying()){
      song41.play();
    }
  }
  
  //42

  if (mouseX < translateX(1434) && mouseX > translateX(1378) && mouseY < translateY(668) && mouseY > translateY(603)){
    text("♫", mouseX, mouseY)
    if (!song42.isPlaying()){
      song42.play();
    }
  }
      
  //43

  if (mouseX < translateX(1524) && mouseX > translateX(1487) && mouseY < translateY(533) && mouseY > translateY(471)){
    text("♫", mouseX, mouseY)
    if (!song43.isPlaying()){
      song43.play();
    }
  }

  
  //44

  if (mouseX < translateX(1853) && mouseX > translateX(1782) && mouseY < translateY(641) && mouseY > translateY(583)){
    text("♫", mouseX, mouseY)
    if (!song44.isPlaying()){
      song44.play();
    }
  }

  
  //45

  if (mouseX < translateX(1892) && mouseX > translateX(1827) && mouseY < translateY(1228) && mouseY > translateY(1168)){
    text("♫", mouseX, mouseY)
    if (!song45.isPlaying()){
      song45.play();
    }
  }      
  
  //46

  if (mouseX < translateX(1964) && mouseX > translateX(1943) && mouseY < translateY(1364) && mouseY > translateY(1270)){
    text("♫", mouseX, mouseY)
    if (!song46.isPlaying()){
      song46.play();
    }
  }
      
  //47

  if (mouseX < translateX(1294) && mouseX > translateX(1266) && mouseY < translateY(187) && mouseY > translateY(118)){
    text("♫", mouseX, mouseY)
    if (!song47.isPlaying()){
      song47.play();
    }
  }

  //48

  if (mouseX < translateX(1674) && mouseX > translateX(1641) && mouseY < translateY(185) && mouseY > translateY(112)){
    text("♫", mouseX, mouseY)
    if (!song48.isPlaying()){
      song48.play();
    }
  }
      
  
  //49

  if (mouseX < translateX(1799) && mouseX > translateX(1776) && mouseY < translateY(279) && mouseY > translateY(216)){
    text("♫", mouseX, mouseY)
    if (!song49.isPlaying()){
      song49.play();
    }
  }

  //50

  if (mouseX < translateX(1501) && mouseX > translateX(1476) && mouseY < translateY(269) && mouseY > translateY(216)){
    text("♫", mouseX, mouseY)
    if (!song50.isPlaying()){
      song50.play();
    }
  }
      
  //51

  if (mouseX < translateX(1352) && mouseX > translateX(1286) && mouseY < translateY(405) && mouseY > translateY(362)){
    text("♫", mouseX, mouseY)
    if (!song51.isPlaying()){
      song51.play();
    }
  }
      
  //52

  if (mouseX < translateX(1774) && mouseX > translateX(1748) && mouseY < translateY(490) && mouseY > translateY(438)){
    text("♫", mouseX, mouseY)
    if (!song52.isPlaying()){
      song52.play();
    }
  }
      
  
  //53

  if (mouseX < translateX(2021) && mouseX > translateX(1931) && mouseY < translateY(571) && mouseY > translateY(511)){
    text("♫", mouseX, mouseY)
    if (!song53.isPlaying()){
      song53.play();
    }
  }

   //54

  if (mouseX < translateX(2046) && mouseX > translateX(1983) && mouseY < translateY(723) && mouseY > translateY(640)){
    text("♫", mouseX, mouseY)
    if (!song54.isPlaying()){
      song54.play();
    }
  }
      
   //55

  if (mouseX < translateX(136) && mouseX > translateX(96) && mouseY < translateY(990) && mouseY > translateY(877)){
    text("♫", mouseX, mouseY)
    if (!song55.isPlaying()){
      song55.play();
    }
  }
      
   //56

  if (mouseX < translateX(328) && mouseX > translateX(281) && mouseY < translateY(909) && mouseY > translateY(816)){
    text("♫", mouseX, mouseY)
    if (!song56.isPlaying()){
      song56.play();
    }
  }
  
   //57

  if (mouseX < translateX(828) && mouseX > translateX(782) && mouseY < translateY(996) && mouseY > translateY(918)){
    text("♫", mouseX, mouseY)
    if (!song57.isPlaying()){
      song57.play();
    }
  }

  
   //58

  if (mouseX < translateX(993) && mouseX > translateX(953) && mouseY < translateY(617) && mouseY > translateY(517)){
    text("♫", mouseX, mouseY)
    if (!song58.isPlaying()){
      song58.play();
    }
  }

   //59

  if (mouseX < translateX(1181) && mouseX > translateX(1150) && mouseY < translateY(562) && mouseY > translateY(464)){
    text("♫", mouseX, mouseY)
    if (!song59.isPlaying()){
      song59.play();
    }
  }

  
   //60

  if (mouseX < translateX(1746) && mouseX > translateX(1716) && mouseY < translateY(407) && mouseY > translateY(317)){
    text("♫", mouseX, mouseY)
    if (!song60.isPlaying()){
      song60.play();
    }
  }

    //C1

  if (mouseX < translateX(397) && mouseX > translateX(185) && mouseY < translateY(155) && mouseY > translateY(43)){
    text("♫", mouseX, mouseY)
    if (!songC1.isPlaying()){
      songC1.play();
    }
  }

  
    //C2

  if (mouseX < translateX(817) && mouseX > translateX(693) && mouseY < translateY(216) && mouseY > translateX(15)){
    text("♫", mouseX, mouseY)
    if (!songC2.isPlaying()){
      songC2.play();
    }
  }

  
    //C3

  if (mouseX < translateX(929) && mouseX > translateX(808) && mouseY < translateY(760) && mouseY > translateY(535)){
    text("♫", mouseX, mouseY)
    if (!songC3.isPlaying()){
      songC3.play();
    }
  }

    //O1

  if (mouseX < translateX(182) && mouseX > translateX(24) && mouseY < translateY(389) && mouseY > translateY(287)){
    text("♫", mouseX, mouseY)
    if (!songO1.isPlaying()){
      songO1.play();
    }
  }
  
    //O2

  if (mouseX < translateX(666) && mouseX > translateX(604) && mouseY < translateY(936) && mouseY > translateY(835)){
    text("♫", mouseX, mouseY)
    if (!songO2.isPlaying()){
      songO2.play();
    }
  }

  
    //O3

  if (mouseX < translateX(1225) && mouseX > translateX(1070) && mouseY < translateY(903) && mouseY > translateY(810)){
    text("♫", mouseX, mouseY)
    if (!songO3.isPlaying()){
      songO3.play();
    }
  }

    //L1

  if (mouseX < translateX(266) && mouseX > translateX(102) && mouseY < translateY(784) && mouseY > translateY(710)){
    text("♫", mouseX, mouseY)
    if (!songL1.isPlaying()){
      songL1.play();
    }
  }

    //L2

  if (mouseX < translateX(476) && mouseX > translateX(370) && mouseY < translateY(896) && mouseY > translateY(783)){
    text("♫", mouseX, mouseY)
    if (!songL2.isPlaying()){
      songL2.play();
    }
  }
      
    //T1

  if (mouseX < translateX(149) && mouseX > translateX(67) && mouseY < translateY(1222) && mouseY > translateY(1133)){
    text("♫", mouseX, mouseY)
    if (!songT1.isPlaying()){
      songT1.play();
    }
  }

    //T2

  if (mouseX < translateX(275) && mouseX > translateX(208) && mouseY < translateY(1419) && mouseY > translateY(1335)){
    text("♫", mouseX, mouseY)
    if (!songT2.isPlaying()){
      songT2.play();
    }
  }
      
    //T3

  if (mouseX < translateX(555) && mouseX > translateX(458) && mouseY < translateY(1146) && mouseY > translateY(1047)){
    text("♫", mouseX, mouseY)
    if (!songT3.isPlaying()){
      songT3.play();
    }
  }
      
    //T4

  if (mouseX < translateX(747) && mouseX > translateX(694) && mouseY < translateY(1376) && mouseY > translateY(1168)){
    text("♫", mouseX, mouseY)
    if (!songT4.isPlaying()){
      songT4.play();
    }
  }

  
   //R1

  if (mouseX < translateX(890) && mouseX > translateX(821) && mouseY < translateY(1522) && mouseY > translateY(1321)){
    text("♫", mouseX, mouseY)
    if (!songR1.isPlaying()){
      songR1.play();
    }
  }
      
   //R2

  if (mouseX < translateX(1059) && mouseX > translateX(999) && mouseY < translateY(1259) && mouseY > translateY(1117)){
    text("♫", mouseX, mouseY)
    if (!songR2.isPlaying()){
      songR2.play();
    }
  }
      

   //R3

  if (mouseX < translateX(1389) && mouseX > translateX(1341) && mouseY < translateY(1385) && mouseY > translateY(1200)){
    text("♫", mouseX, mouseY)
    if (!songR3.isPlaying()){
      songR3.play();
    }
  }

  
   //R4

  if (mouseX < translateX(1583) && mouseX > translateX(1540) && mouseY < translateY(1340) && mouseY > translateY(1194)){
    text("♫", mouseX, mouseY)
    if (!songR4.isPlaying()){
      songR4.play();
    }
  }
      
   //B1

  if (mouseX < translateX(1511) && mouseX > translateX(1265) && mouseY < translateY(1007) && mouseY > translateY(886)){
    text("♫", mouseX, mouseY)
    if (!songB1.isPlaying()){
      songB1.play();
    }
  }
      
   //B2

  if (mouseX < translateX(1856) && mouseX > translateX(1622) && mouseY < translateY(1013) && mouseY > translateY(902)){
    text("♫", mouseX, mouseY)
    if (!songB2.isPlaying()){
      songB2.play();
    }
  }
      
   //B3

  if (mouseX < translateX(1955) && mouseX > translateX(1863) && mouseY < translateY(818) && mouseY > translateY(592)){
    text("♫", mouseX, mouseY)
    if (!songB3.isPlaying()){
      songB3.play();
    }
  }
      
   //N1

  if (mouseX < translateX(1035) && mouseX > translateX(927) && mouseY < translateY(230) && mouseY > translateY(39)){
    text("♫", mouseX, mouseY)
    if (!songN1.isPlaying()){
      songN1.play();
    }
  }

   //N2

  if (mouseX < translateX(1281) && mouseX > translateX(1185) && mouseY < translateY(597) && mouseY > translateY(450)){
    text("♫", mouseX, mouseY)
    if (!songN2.isPlaying()){
      songN2.play();
    }
  }
      
    //N3

  if (mouseX < translateX(1714) && mouseX > translateX(1536) && mouseY < translateY(603) && mouseY > translateY(514)){
    text("♫", mouseX, mouseY)
    if (!songN3.isPlaying()){
      songN3.play();
    }
  }
      
    //N4

  if (mouseX < translateX(1835) && mouseX > translateX(1756) && mouseY < translateY(1448) && mouseY > translateY(1285)){
    text("♫", mouseX, mouseY)
    if (!songN4.isPlaying()){
      songN4.play();
    }
  }
      
  
    //W1

  if (mouseX < translateX(1611) && mouseX > translateX(1310) && mouseY < translateY(118) && mouseY > translateY(63)){
    text("♫", mouseX, mouseY)
    if (!songW1.isPlaying()){
      songW1.play();
    }
  }
      
    //W2

  if (mouseX < translateX(1897) && mouseX > translateX(1835) && mouseY < translateY(207) && mouseY > translateY(117)){
    text("♫", mouseX, mouseY)
    if (!songW2.isPlaying()){
      songW2.play();
    }
  }
      
  
    //W3

  if (mouseX < translateX(1996) && mouseX > translateX(1804) && mouseY < translateY(457) && mouseY > translateY(410)){
    text("♫", mouseX, mouseY)
    if (!songW3.isPlaying()){
      songW3.play();
    }
  }
       
}
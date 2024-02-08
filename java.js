var body = 0;
// Správný text, který se bude porovnávat

var song;
var singer;
var userSong;
var userSinger;


// Funkce pro zachycení kliknutí na tlačítko
function handleClick(event) {
  // Získání ID tlačítka, na které bylo kliknuto
  var idTlacitka = event.target.id;
  
  if (idTlacitka == "tlacitko1")
  {
    song = "runaway";
    singer = "kanye west"
    userSong = document.getElementById("userSong1").value.toLowerCase();
    userSinger = document.getElementById("userSinger1").value.toLowerCase();
    porovnejVstupy();
  }
  if (idTlacitka == "tlacitko2")
  {
    song = "dancing in the moonlight";
    singer = "toploader"
    userSong = document.getElementById("userSong2").value.toLowerCase();
    userSinger = document.getElementById("userSinger2").value.toLowerCase();
    porovnejVstupy();
  }
  if (idTlacitka == "tlacitko3")
  {
    song = "life is a highway";
    singer = "rascal flatts"
    userSong = document.getElementById("userSong3").value.toLowerCase();
    userSinger = document.getElementById("userSinger3").value.toLowerCase();
    porovnejVstupy();
  }
  if (idTlacitka == "tlacitko4")
  {
    song = "another one bites the dust";
    singer = "queen"
    userSong = document.getElementById("userSong4").value.toLowerCase();
    userSinger = document.getElementById("userSinger4").value.toLowerCase();
    porovnejVstupy();
  }
  if (idTlacitka == "tlacitko5")
  {
    song = "cupid";
    singer = "fifty fifty"
    userSong = document.getElementById("userSong5").value.toLowerCase();
    userSinger = document.getElementById("userSinger5").value.toLowerCase();
    porovnejVstupy();
  }
  if (idTlacitka == "tlacitko6")
  {
    song = "am i dreaming";
    singer = "metro boomin"
    userSong = document.getElementById("userSong6").value.toLowerCase();
    userSinger = document.getElementById("userSinger6").value.toLowerCase();
    porovnejVstupy();
  }
  if (idTlacitka == "tlacitko7")
  {
    song = "say so";
    singer = "doja cat"
    userSong = document.getElementById("userSong7").value.toLowerCase();
    userSinger = document.getElementById("userSinger7").value.toLowerCase();
    porovnejVstupy();
  }
  if (idTlacitka == "tlacitko8")
  {
    song = "mamma mia";
    singer = "abba"
    userSong = document.getElementById("userSong8").value.toLowerCase();
    userSinger = document.getElementById("userSinger8").value.toLowerCase();
    porovnejVstupy();
  }
  if (idTlacitka == "tlacitko9")
  {
    song = "umbrella";
    singer = "rihanna"
    userSong = document.getElementById("userSong9").value.toLowerCase();
    userSinger = document.getElementById("userSinger9").value.toLowerCase();
    porovnejVstupy();
  }
  if (idTlacitka == "tlacitko10")
  {
    song = "bones";
    singer = "imagine dragons"
    userSong = document.getElementById("userSong10").value.toLowerCase();
    userSinger = document.getElementById("userSinger10").value.toLowerCase();
    porovnejVstupy();
  }
  if (idTlacitka == "tlacitko11")
  {
    song = "levitating";
    singer = "dua lipa"
    userSong = document.getElementById("userSong11").value.toLowerCase();
    userSinger = document.getElementById("userSinger11").value.toLowerCase();
    porovnejVstupy();
  }
  if (idTlacitka == "tlacitko12")
  {
    song = "unstoppable";
    singer = "sia"
    userSong = document.getElementById("userSong12").value.toLowerCase();
    userSinger = document.getElementById("userSinger12").value.toLowerCase();
    porovnejVstupy();
  }
  if (idTlacitka == "tlacitko13")
  {
    song = "firework";
    singer = "katy perry"
    userSong = document.getElementById("userSong13").value.toLowerCase();
    userSinger = document.getElementById("userSinger13").value.toLowerCase();
    porovnejVstupy();
  }
  if (idTlacitka == "tlacitko14")
  {
    song = "goosebumps";
    singer = "travis scott"
    userSong = document.getElementById("userSong14").value.toLowerCase();
    userSinger = document.getElementById("userSinger14").value.toLowerCase();
    porovnejVstupy();
  }
  if (idTlacitka == "tlacitko15")
  {
    song = "i took a pill in ibiza";
    singer = "mike posner"
    userSong = document.getElementById("userSong15").value.toLowerCase();
    userSinger = document.getElementById("userSinger15").value.toLowerCase();
    porovnejVstupy();
  }
  if (idTlacitka == "tlacitko16")
  {
    song = "moves like jagger";
    singer = "maroon 5"
    userSong = document.getElementById("userSong16").value.toLowerCase();
    userSinger = document.getElementById("userSinger16").value.toLowerCase();
    porovnejVstupy();
  }
  if (idTlacitka == "tlacitko17")
  {
    song = "mockingbird";
    singer = "eminem"
    userSong = document.getElementById("userSong17").value.toLowerCase();
    userSinger = document.getElementById("userSinger17").value.toLowerCase();
    porovnejVstupy();
  }
  if (idTlacitka == "tlacitko18")
  {
    song = "congratulations";
    singer = "post malone"
    userSong = document.getElementById("userSong18").value.toLowerCase();
    userSinger = document.getElementById("userSinger18").value.toLowerCase();
    porovnejVstupy();
  }
}

// Přiřazení posluchačů událostí pro každé tlačítko
document.getElementById("tlacitko1").addEventListener("click", handleClick);
document.getElementById("tlacitko2").addEventListener("click", handleClick);
document.getElementById("tlacitko3").addEventListener("click", handleClick);
document.getElementById("tlacitko4").addEventListener("click", handleClick);
document.getElementById("tlacitko5").addEventListener("click", handleClick);
document.getElementById("tlacitko6").addEventListener("click", handleClick);
document.getElementById("tlacitko7").addEventListener("click", handleClick);
document.getElementById("tlacitko8").addEventListener("click", handleClick);
document.getElementById("tlacitko9").addEventListener("click", handleClick);
document.getElementById("tlacitko10").addEventListener("click", handleClick);
document.getElementById("tlacitko11").addEventListener("click", handleClick);
document.getElementById("tlacitko12").addEventListener("click", handleClick);
document.getElementById("tlacitko13").addEventListener("click", handleClick);
document.getElementById("tlacitko14").addEventListener("click", handleClick);
document.getElementById("tlacitko15").addEventListener("click", handleClick);
document.getElementById("tlacitko16").addEventListener("click", handleClick);
document.getElementById("tlacitko17").addEventListener("click", handleClick);
document.getElementById("tlacitko18").addEventListener("click", handleClick);
document.getElementById("tlacitko19").addEventListener("click", handleClick);
document.getElementById("tlacitko20").addEventListener("click", handleClick);



function porovnejVstupy()
{
  if (userSong.trim() == song && userSinger.trim() != singer)
  {
    pricti1Bod();
    document.getElementById("vysledek").textContent = "Písnička je správně. 1 Bod přidán!";
  }

  //+2 body
  if (userSong.trim() != song && userSinger.trim() == singer)
  {
    pricti2Body();
    document.getElementById("vysledek").textContent = "Zpěvák je správně. 2 Body přidány!";
  }

  //+3 body
  if (userSong.trim() == song && userSinger.trim() == singer) 
  {
    pricti3Body();
    document.getElementById("vysledek").textContent = "Vše je správně. 3 Body přidány!";
  } 
  if (userSong.trim() != song && userSinger.trim() != singer) 
  {
    document.getElementById("vysledek").textContent = "Vše špatně";
  }
  document.getElementById("porovnani").textContent = "vše proběhlo";
}



function pricti1Bod()
{
  body = body + 1;
}

function pricti2Body()
{
  body = body + 2;
}

// přidání 3 bodů
function pricti3Body() 
{
  body = body + 3;
}
let myInfo = {
  name: "Garrett Bouldin",
  school: "University of North Alabama",
  major: "Computer Information Systems",
  gameName: "Mario Coin Catcher",
  gameLink: "https://gbouldin43.github.io/vigilant-giggle-david/",
  gameCode: "https://github.com/gbouldin43/vigilant-giggle-david",
  gameDescription: "Catch coins with Mario"
}

$('body').append("Object printed to DOM using loop: <br> <br>");

$.each(myInfo, (key,val)=>{
  $('body').append("key: " + key + ", value: " + val + "<br>");
})

$('body').append("<br> <br> Object elements printed to DOM individually: <br> <br>");

$('body').append(`Name: ${myInfo.name} <br>`);
$('body').append(`School: ${myInfo.school} <br>`);
$('body').append(`Major: ${myInfo.major} <br>`);
$('body').append(`Game Name: ${myInfo.gameName} <br>`);
$('body').append(`<a href="${myInfo.gameLink}" target="_blank">Mario Coin Catcher Game</a> <br>`);
$('body').append(`<a href="${myInfo.gameCode}" target="_blank">Mario Coin Catcher Code</a> <br>`);
$('body').append(`Game Description: ${myInfo.gameDescription}`);
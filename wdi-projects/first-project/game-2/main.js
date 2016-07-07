document.addEventListener('DOMContentLoaded', function() {


  // GLOBAL VARIABLES
  var container = document.querySelector('#container');
  var messegeBox = document.querySelector('.message-box');
  var mainImageBox = document.querySelector('.image-box');
  var answerBox = document.querySelector('.answer-box')

  var question = document.querySelector('h4');

  var headline = document.querySelector('h3');
  var answer;
  var image = document.querySelector('img');
  // CLICK ANSWER FUNTION

  var input = document.getElementById('input');
  var yourname;
  var scene = {};


  input.onkeypress = function(event) {
    if (event.key == "Enter") {
      yourname = input.value;
      console.log(yourname);
      input.parentNode.removeChild(input)
      advanceTo(scene.one)
    }
  };

  var advanceTo = function(s) {
    changeImage(s.image)
    changeText(s.text)
    changeButtons(s.buttons)
  };
  //
  // $( "button" ).click(function() {
  //   var answer = $(this).text();
  //   console.log(answer);
  // });

  var changeText = function(words) {
    headline.innerHTML = words.replace("UserName", reverser(yourname));
  };

  var changeImage = function(img) {
    image.style.backgroundImage = 'img';
  };

  var changeButtons = function(buttonList) {
    buttonBox.innerHTML = "";
    for (var i = 0; i < buttonList.length; i++) {
      buttonBox.innerHTML += "<button onClick=" + buttonList[i][1] + ">" + buttonList[i][0] + "</button>";
    };
  };

  function reverser(str) {
    var revStr = "";
    for (var i = 0; i < str.length; i++) {
      revStr += str[str.length - 1 -i];
    }
    return revStr;
  }


  var scene = {
    one: {
      image: 'images/eboy_workstation_2.gif',
      text: "Oops sorry, something went wrong with the code, your name is now UserName. Welcome to programming.  ",
      buttons: [
        ["Option one", 'advanceTo(scene.two)'],
        ["Option two", 'advanceTo(scene.three)']
      ]

    },
    two: {
      image: "",
      text: "blah blah",
      buttons: [
        ["Option one", "advanceTo(scene.four)"],
        ["Option two", "advanceTo(scene.five)"]
      ]
    },
  };


});

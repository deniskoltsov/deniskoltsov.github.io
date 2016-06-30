document.addEventListener('DOMContentLoaded', function() {


  // GLOBAL VARIABLES
  var container = document.querySelector('#container');
  var messegeBox = document.querySelector('.message-box');
  var mainImageBox = document.querySelector('.image-box');
  var answerBox = document.querySelector('.answer-box')

  var question = document.querySelector('h4');

  var headline = document.querySelector('h3')
  var answer;

  // CLICK ANSWER FUNTION
  // function userAnswer(){
  var scenes = {

    one = {

    }

  }
    $( "button" ).click(function() {
      var answer = $(this).text();
      console.log(answer);
        if (answer == 'A') {
          headline.innerHTML = 'Sorry, the code messed up so your name is set to Bob. Do you want to A or B?';
        } else {
          headline.innerHTML = 'Cool, your random name is Bob';
        }
    });
  // }




});

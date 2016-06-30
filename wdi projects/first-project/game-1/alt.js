
  $(function() {
    getQuestion();
});

var count = 0,
    results = [];

function getQuestion() {
  var list = [];
  for (var i = 1; i <= 100; i++) {
      list.push(i);
  }
  var player1 = document.querySelector('#player-1');
  var player2 = document.querySelector('#player-2');
  var question = document.querySelector('#question')
  var container = document.getElementById('container');

  var boxColors = ['#4AD9D9', '#F5A503', '#F2385A', '#36B1BF', '#2E0927', '#A49A87', '#FF974F', '#BEDB39', '#FFE11A', '#004358', '#3498DB'];
    count++;
    var container = document.getElementById('container');

    function makeCircles() {
      for (var i = 1; i <= 50; i++) {
        list.push(i);
        var div = document.createElement('div')
        div.setAttribute('class', 'box');
        div.style.backgroundColor = boxColors[Math.floor(Math.random() * boxColors.length)];

        // THIS TAKES THE ANSWERS ARRAY AND MAKES IT A TEXT NODE AND APPENDS IT INTO THE DIVS THAT WERE CREATED
        // THEN IT ASSIGNS EACH DIV AN ID WITH THE SAME NUMBER

        var answerTextNode = document.createTextNode(list[i]);
        div.appendChild(answerTextNode);
        div.setAttribute('id', (list[i]));
        container.appendChild(div);
        console.log(list[i]);
      }
    };
    makeCircles();



    var getRandomQuestion = Math.round(Math.random()*20);
    var val2 = Math.round(Math.random()*20);

    var h2 = document.createElement('h2')
    h2.appendChild(document.createTextNode('What is ' + getRandomQuestion + '+' + val2 + " ?"));
    question.appendChild(h2);


    $(".box").each(function() {
      animateDiv($(this));
    });

    function makeNewPosition($container) {

      // Get viewport dimensions (remove the dimension of the div)
      var h = $container.height() - 125;
      var w = $container.width() - 125;

      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);

      return [nh, nw];

    }

    function animateDiv($target) {
      var newq = makeNewPosition($target.parent());
      var oldq = $target.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);

      $target.animate({
        top: newq[0],
        left: newq[1]
      }, speed, function() {
        animateDiv($target);
      });

    };

    function calcSpeed(prev, next) {

      var x = Math.abs(prev[1] - next[1]);
      var y = Math.abs(prev[0] - next[0]);

      var greatest = x > y ? x : y;

      var speedModifier = 0.1;

      var speed = Math.ceil(greatest / speedModifier);

      return speed;
    }





    var answer = $(".box").click(function() {

      var answer = $(this).text();
      console.log(getRandomQuestion);
      console.log(answer);
      var answerTextNode = document.createTextNode(answer);
      player1.appendChild(answerTextNode);
      var val;
      results.push({
            number1 : getRandomQuestion,
            number2 : val2,
            answer : answer,
        });

        $(this).after(function() {
            if(getRandomQuestion + val2 == answer) return 'SUCCESS!';
            else {
              $('.dog').addClass('dog-move')
              return 'Sorry.'
            }
        });

        getQuestion();

        updateResults();
    });


function updateResults() {
    $('#json').html(JSON.stringify(results));
}

var operands = [
  function add(a,b) {
    return a + b;
  },
  function subtract(a,b) {
    return
  }
];

};

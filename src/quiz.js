const QUESTIONS = require("./constants");

console.log(QUESTIONS);

var game = {
  quiz: $("#quiz-area"),
  correct: 0,
  incorrect: 0,
  counter: 120,
  startGame: function() {
    for (var choice = 0; choice < QUESTIONS.length; choice++) {
      var question = "<h2>" + QUESTIONS[choice].question + "</h2>";
      this.quiz.append(question);
      for (
        var answer = 0;
        answer < QUESTIONS[choice].answers.length;
        answer++
      ) {
        var answers = QUESTIONS[choice].answers[answer];
        this.quiz.append(
          "<input type='radio' name='question-" +
            choice +
            "' value='" +
            answers +
            "''>" +
            answers +
            "<br>"
        );
      }
    }
    this.quiz.append("<button id='done'>Done</button>");
  },
  checkAnswers: function() {
    for (let i = 0; i < QUESTIONS.length; i++) {
      var input = "input[name='question-" + i + "']:checked";
      $.each($(input), function() {
        if ($(this).val() === QUESTIONS[i].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
    }
    assemble.results();
  }
};

var assemble = {
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      game.done();
    }
  },
  results: function() {
    clearInterval(setInterval(game.countdown, 1000));
    game.quiz.html("<h2>All Done!</h2>");
    game.quiz.append("<h3>Correct Answers: " + game.correct + "</h3>");
    game.quiz.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
    game.quiz.append(
      "<h3>Unanswered: " +
        (QUESTIONS.length - (game.incorrect + game.correct)) +
        "</h3>"
    );
  }
};

var handlers = {
  startGame: $(document).on("click", "input", function() {
    setInterval(assemble.countdown, 1000);
    $(".nav-link").prepend(
      "Time Remaining: <span id='counter-number'>120</span> Seconds"
    );
    assemble.countdown();
  }),
  endGame: $(document).on("click", "#done", function() {
    game.checkAnswers();
  })
};

game.startGame();

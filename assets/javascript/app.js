var questions = [
    {
    question: "Which bear facts are bear facts?",
    answers: ["Black Bear is best bear", "Bears eat beets", "Bears beat Battlestar Galactica", "All of The Above"],
    correctAnswer: "All of The Above"}, 
    {
    question: "Bears derive their name from?",
    answers: ["A football team in Chicago", "A Dinosaur", "Disney", "Sarcasm"],
    correctAnswer: "A football team in Chicago"}, 
    {
    question: "Bears have been known to attack man, although the fact is fewer humans have been killed by bears than?",
    answers: ["Soap", "Desert Storm 3", "All of WW1 and WW2 combined", "Bennifer"],
    correctAnswer: "All of WW1 and WW2 combined"}, 
    {
    question: "Which song currently reflects Cher's face?",
    answers: ["If I Could Turn Back Time", "I Got You Babe", "The Beat Goes On", "Believe"],
    correctAnswer: "If I Could Turn Back Time"}, 
    {
    question: "When a shark appears, Sea Lions move to the shore because?",
    answers: ["They're better at walking", "Sharks eat Sea Lions and there aren't Tigers on shores", "They like sharp rocks", "They forgot to pay rent"],
    correctAnswer: "Sharks eat Sea Lions and there aren't Tigers on shore"}, 
    {
    question: "Monkeys make up over 80% of the world's...",
    answers: ["Monkey population", "Plane crashes", "Radiation", "Blankets"],
    correctAnswer: "Monkey population"}, 
    {
    question: "What places can sharks only be found on Earth?",
    answers: ["Monster Rallies", "A Mcdonalds Aquarium", "The Alps", "The Northern and Southern hemisphere"],
    correctAnswer: "The Northern and Southern hemisphere"},
];

var game = {
    quiz: $("#quiz-area"),
    correct: 0,
    incorrect: 0,
    counter: 120,
    startGame: function() {
        for (var choice = 0; choice < questions.length; choice++) {
            var question = "<h2>" + questions[choice].question + "</h2>";
            this.quiz.append(question);
            for (var answer = 0; answer < questions[choice].answers.length; answer++) {
            var answers = questions[choice].answers[answer];
            this.quiz.append("<input type='radio' name='question-" + choice +
            "' value='" + answers + "''>" + answers + '<br>');
            };
        };
        this.quiz.append("<button id='done'>Done</button>");
    },
    checkAnswers: function() {
        for (let i = 0; i < questions.length; i++) {
            var input = "input[name='question-" + i + "']:checked";
            $.each($(input), function() {
                if ($(this).val() === questions[i].correctAnswer) {
                game.correct++;
                }
                else {
                game.incorrect++;
                }
            });
        }assemble.results();
    },
};

var assemble = {
    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            game.done();
        };
    },
    results: function() {
        clearInterval(setInterval(game.countdown, 1000));
        game.quiz.html("<h2>All Done!</h2>");
        game.quiz.append("<h3>Correct Answers: " + game.correct + "</h3>");
        game.quiz.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
        game.quiz.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
    },
}

var handlers = {
    startGame: $(document).on("click", "input", function() {
        setInterval(assemble.countdown, 1000);
        $(".nav-link").prepend("Time Remaining: <span id='counter-number'>120</span> Seconds");
        assemble.countdown();
    }),
    endGame: $(document).on("click", "#done", function() {
        game.checkAnswers();
    }),
};

game.startGame()
var readLineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;
var userName = readLineSync.question("May I Know Your Name? \n");
console.log("WELLCOME! " + chalk.bold.cyan(userName) + " to the game");
console.log("Let See How Much Do You Know About " + chalk.bold.bgYellowBright("Marvel"))
console.log("Who said the following quotes -");

function Marvel(questions, answer) {
  var useranswer = readLineSync.question(questions);
  if (useranswer.toLowerCase() === answer) {
    console.log(chalk.bold.green("Corect Answer"));
    score++;
    console.log("Current score is " + chalk.bold.blueBright(score));
  }
  else {
    console.log(chalk.bold.red("Wrong Answer"));
    score--;
    if (score < 0) {
      score = 0
      console.log("Current score is " + chalk.bold.blueBright(score));
    }
    else {
      console.log("Current score is " + chalk.bold.blueBright(score));
    }
  }

};
var marvelquestion = [{
  question: "1) Avengers, assemble! \n",
  Answer: "tony stark"
}, {
  question: "2) He may have been your father, boy, but he wasn’t your daddy \n",
  Answer: "yondu"
}, {
  question: "3) That’s my secret, Captain I’m always angry. \n",
  Answer: "bruce banner"
}, {
  question: "4) If you’re nothing without this suit, then you shouldn’t have it. \n",
  Answer: "tony stark"
}, {
  question: "5) It's not about how much we lost. It's about how much we have left \n",
  Answer: "tony stark"
}, {
  question: "6) The hardest choices require the strongest wills. \n",
  Answer: "thanos"
}, {
  question: "7) No man can win every battle, but no man should fall without a struggle. \n",
  Answer: "peter parker"
}, {
  question: "8) The one thing they love more than a hero is to see a hero fail \n",
  Answer: "goblin"
}]

for (var i = 0; i < marvelquestion.length; i++) {
  var currentQuestion = marvelquestion[i];
  Marvel(currentQuestion.question, currentQuestion.Answer);
  console.log("correct answer is " + chalk.bold.bgMagentaBright(currentQuestion.Answer));
  console.log("-----------------------------------------------------------------\n");
}
console.log(chalk.bold.bgGreenBright("HIGH SCORE IS 8"));
console.log("Your FINAL SCORE IS " + chalk.bold.bgCyanBright(score));
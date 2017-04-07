function writeTweet()
{
  var randIndex = randomUpTo(3);
  var sentence;
  var intro = ["I'll leave tomorrow's problem",
  "Calvin: Sometimes I think the surest sign that intelligent life exists elsewhere in the universe",
  "I expect nothing", "One remarkable things about life."];
  var body = ["to tomorrow's me","is that none of it has tried to contact us","and I'm still disappointed",
  "It's never so bad that it can't get worse","to do all the nothing"];
  var end = ["to do what we want to do", "how will we appreciate it."];

  sentence = intro[randIndex];
  randIndex=randomUpTo(4);
  sentence+=" " + body[randIndex];
  randIndex=randomUpTo(1);
  sentence+=" " + body[randIndex];
  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{

  return Math.floor(Math.random() * (max+1));
}

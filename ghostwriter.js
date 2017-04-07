function writeTweet()
{
  var randIndex;
  var sentence;
  var intro = ["What's with", "Have you ever heard about", "I had an idea about",
   "I just want to talk about"];
   var body = ["the sky", " the underground", "a great movie",
    "Sutter", "aliens"];
    var end = ["because it's weird", "too bad I can't remember it"];

    randIndex = randomUpTo(intro.length - 1);
    sentence = intro[randIndex];
    randIndex = randomUpTo(body.length - 1);
    sentence = sentence + " " + body[randIndex];
    randIndex = randomUpTo(end.length - 1);
    sentence = sentence + " " + end[randIndex];
    document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}

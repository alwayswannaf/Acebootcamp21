function myFunction() {
  var child = document.getElementById("input1").value;
  var spouse = document.getElementById("input2").value;
  var loc = document.getElementById("input3").value;
  var job = document.getElementById("input4").value;
  var future = 'You will become a' + job + ' living in ' + loc + ', you will get married to ' + spouse + ' and will have ' + child
    + ' children.';
  document.getElementById("future").innerHTML = future;
  var down = '!';
  var up = '!!';
  document.getElementById("head").innerHTML = up;
  document.getElementById("button").innerHTML = down;
}
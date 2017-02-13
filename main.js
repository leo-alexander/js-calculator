$(document).ready(function() {

var problem = "";
var solution = "";
var key = "";

//On any key pressed:
$('.key').click(keyPressed);
function keyPressed() {
  if (this.classList.contains("num")) {//If key pressed is no., add to problem
    if (problem == solution) {
      problem="";
    }
    problem += $(this).attr("value");
    $("#problem").html(problem);
  }
  else if (this.classList.contains("arithmetic")) {//If key pressed is arithmetic, add to problem
    problem += $(this).attr("value");
    $("#problem").html(problem);
  }
  else if (this.classList.contains("allClear")) {//If key pressed is AC, clear display
    problem="";
    solution="";
    $("#problem").html(problem);
    $("#solution").html(solution);
}
  else if (this.classList.contains("clearEntry")) {//If key pressed is DEL, remove last key
    if (problem == "") {
      solution = ""
      $("#solution").html(solution);
    }
    else {
    problem = problem.substring(0, problem.length-1);
    $("#problem").html(problem);
    }
  }
  else if (this.classList.contains("equals")) {//If key pressed is equals, caculate
    solution = eval(problem);//Turn problem string into calculation
    $("#solution").html(solution);
    $("#problem").html(problem);
    problem = solution;
  }
}
});



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(today);
console.log(today);



//added an event listener to the save button
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    //save the value and time to local storage
    localStorage.setItem(time, value);
  })
//get the current day and time 
  function hourUpdater() {
    var currentHour = moment().hour();
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      //check the time and add the appropriate class by comparing to the current hour
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
  }

  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour1 .description").val(localStorage.getItem("hour1"));
  $("#hour2 .description").val(localStorage.getItem("hour2"));
  $("#hour3 .description").val(localStorage.getItem("hour3"));
  $("#hour4 .description").val(localStorage.getItem("hour4"));
  $("#hour5 .description").val(localStorage.getItem("hour5"));

  hourUpdater();
})
  
 
  // TODO: Add code to display the current date in the header of the page.

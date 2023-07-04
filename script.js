//display the current day and time
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
//function to compare time and add color blocks according to time 
  function hourUpdater() {
    var currentHour = moment().hour();
    for(var i=9; i<18; i++){
      if (i < currentHour) {
        $("#hour" + i).addClass("past");
      } else if (i === currentHour) {
        $("#hour" + i).addClass("present");
      }
      else {
        $("#hour" + i).addClass("future");
      }}
    
  }
//gets items from localstorage
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  hourUpdater();
})
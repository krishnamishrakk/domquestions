
//  function Submit() {

//Q1.Access element by id name:-

// // document.getElementById("text").innerText="This is Div tag";

//Q2.Access element by ClassName:-

// // let res = document.getElementsByClassName("box");
// //  res[0].innerText = "This is access by class";

//Q3/4.Access element by Tag Name && Change the heading from ""Hello"" to ""Hello World"" using DOM functions" :-

// // let res = document.getElementsByTagName("h1");
// //  res[0].innerText = "Hello World...!!!";

//Q5.Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

// //  document.getElementById("Container").style.flexDirection="column";

//Q6.Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions":-

// //  document.getElementById("changed").style.color = "red";

//Q7.Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy":-

// // document.getElementById("changed").innerText = "Welcome to Elevation academy";

//Q8.Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected:-

// // var result = document.getElementById("text");
// // var result2 = result.value;
// // document.getElementById("output").innerText = result2;

// }

//Q9.Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second:-
function clock() {
    var hours = document.getElementById("hour");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("ampm");
    var time = new Date();
  
    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";
  
    if (hrs == 0) {
      hrs = 12;
    }
  
    if (hrs > 12) {
      hrs = hrs - 12;
      am_pm = "PM";
    }
    if (hrs < 10) {
      hrs = "0" + hrs;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (secs < 10) {
      secs = "0" + secs;
    }
    hours.innerText = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;
    am.innerText = am_pm;
  }
  setInterval(clock, 1000);
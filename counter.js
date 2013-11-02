$(document).ready(function() {

  var hoursLabel = document.getElementById("hours");
  var minutesLabel = document.getElementById("minutes");
  var secondsLabel = document.getElementById("seconds");
  var totalSeconds = 0;

  setInterval(setTime, 1000);

  totalSeconds = 0;

     function setTime() {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds%60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds/60%60));
        hoursLabel.innerHTML = pad(parseInt(totalSeconds/3600));
     }

     function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
           return "0" + valString;
        } else {
           return valString;
        }
     }


     var horn = document.getElementsByTagName("audio")[0];

     $( ".digit").on( "click", function() {
      resetTime();
      horn.play();
      $( "#sandwich" ).show("scale", "percent: 500", 4000, null);
    });

     function resetTime() {
        totalSeconds = 0;
     }
});

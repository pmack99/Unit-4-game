var counter = 0;
var wins = 0;
var losses = 0;
var magicNumber = [];

  //create random Magic number for the game
  var magicNumber=Math.floor(Math.random()*120+1);
  console.log(magicNumber);

  //print the magic number to the page
  $('#magic-Number').text(magicNumber);

    //create numbers for ach of the crystals
    var num1= Math.floor(Math.random()*12+1)
    console.log(num1);
    var num2= Math.floor(Math.random()*12+1)
    console.log(num2);
    var num3= Math.floor(Math.random()*12+1)
    console.log(num3);
    var num4= Math.floor(Math.random()*12+1)
    console.log(num4);

    function reset(){
      magicNumber=Math.floor(Math.random()*120+1);
      console.log(magicNumber);
      $('#magic-Number').text(magicNumber);
      num1= Math.floor(Math.random()*12+1);
      num2= Math.floor(Math.random()*12+1);
      num3= Math.floor(Math.random()*12+1);
      num4= Math.floor(Math.random()*12+1);
      counter = 0;
      $('#yourNumber').text(counter);
      } 
 
    function check(){
    if (counter === magicNumber) {
    var sound = document.getElementById("audio_two");
    sound.play();
    alert("You win!");
    wins++;
    $("#wins-score").text(wins);
    counter = 0;
    $('#yourNumber').text(counter);
    reset();
    }

    else if (counter > magicNumber) {
    var sound = document.getElementById("audio_three");
    sound.play();
    alert("You lose!!");
    losses++;
    $("#losses-score").text(losses);
    counter = 0;
    $('#yourNumber').text(counter);
    reset();
    }
    }

    $("#redCrystal").on("click", function() {
    counter = counter + num1;
    check();
    $('#yourNumber').text(counter);
    var sound = document.getElementById("audio");
    sound.play();
    
    });

    $("#greenCrystal").on("click", function() {
    counter = counter + num2;
    check();
    $('#yourNumber').text(counter);
    var sound = document.getElementById("audio");
    sound.play();

   });

    $("#blueCrystal").on("click", function() {
    counter = counter + num3;
    check();
    $('#yourNumber').text(counter);
    var sound = document.getElementById("audio");
    sound.play();
    
    
  });
  $("#blackCrystal").on("click", function() {
    counter = counter + num4;
    check();
    $('#yourNumber').text(counter);
    var sound = document.getElementById("audio");
    sound.play();
  
  });

  $("#random-button").on("click", function() {
      reset();

    });

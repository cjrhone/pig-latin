// USER INTERFACE
$(document).ready(function() {
  $("form#learnPigLatin").submit(function(event) {
    event.preventDefault();
    var translate = $("input#translate").val();
    var translateSplit = translate.toLowerCase().split("").slice(1,50);

    translateSplit.push("w", "a", "y");

    var result = translateSplit;

    $("#result").show();
    $(".finalResult").text(result.join(''));



});
});



$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#animate").animate({
        left: 200
      }, 1000, function() {
         setTimeout(goLeft, 20);
      });
    }
    function goLeft() {
        $("#animate").animate({
        left: 0
      }, 1000, function() {
         setTimeout(goRight, 20);
      });
    }

    setTimeout(goRight, 20);
});

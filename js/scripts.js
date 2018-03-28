// USER INTERFACE
$(document).ready(function() {
  $("form#learnPigLatin").submit(function(event) {
    event.preventDefault();
    var translate = $("input#translate").val();
    var translateSplit = translate.toLowerCase().split("").slice(1,50);

    translateSplit.push("m", "a", "y");
    // console.log(translateSplit.slice(1,50));
    // translateJoin = translateSplit.join('');

    var result = translateSplit;

    $("#result").show();
    $(".finalResult").text(result.join(''));



});
});

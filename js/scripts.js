// USER INTERFACE
$(document).ready(function() {
  $("form#learnPigLatin").submit(function(event) {
    event.preventDefault();
    var translate = $("input#translate").val();
    var translateSplit = translate.toLowerCase().split("");
    translateSplit.push("m", "a", "y");
    console.log(translateSplit.slice(1,50));

});
});


$(document).ready(function() {
    $("#formOne").submit(function(event) {
        const person1Input = $("#person1").val();
        const person2Input = $("#person2").val();
        const animalInput= $("#animal").val();
        const exclamationInput = $("#exclamation").val();
        const verbInput = $("#verb").val();
        const nounInput = $("#noun").val();

        $(".person1").append(person1Input);
        $(".person2").append(person2Input);
        $(".animal").append(animalInput);
        $(".exclamation").append(exclamationInput);
        $(".verb").append(verbInput);
        $(".noun").append(nounInput);
    
      $("#story").show();
      event.preventDefault();
    });
  });
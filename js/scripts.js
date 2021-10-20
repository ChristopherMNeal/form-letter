$(document).ready(function() {
  $("form#nameForm").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#yourname").val();
    $("#dearname").text(nameInput);

    $(".letter").show();
  });
});
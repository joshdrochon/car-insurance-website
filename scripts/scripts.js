$(document).ready(function(){
  $("form#insurance").submit(function(event){
    var age = parseInt($(input#age).val()); // grabs
    var gender = $("select#gender").val();

    var quote = (100-age) * 3;

    $("#rate").empty().append(quote);
    $("quote").show();

    event.preventDefault();
  });
});


$(document).ready(function() {
  $("p").click(function() {
    $("img").show();
  });
});

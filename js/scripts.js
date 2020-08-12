// Business Logic

function tablespoonToTeaspoon(tablespoons) {
  return tablespoons * 3;
}

function ounceToTablespoon(ounces) {
  return ounces * 2;
}

// User Interface Logic

$(document).ready(function() {
  $("form#tableTea").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#tbl-tsp").val());
    const result = tablespoonToTeaspoon(number1);
    $("#output1").text(result);

    $("#output1").show();
  });
  $("form#ounceTable").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#ounce-tbl").val());
    const result = ounceToTablespoon(number1);
    $("#output2").text(result);

    $("#output2").show();
  });
});
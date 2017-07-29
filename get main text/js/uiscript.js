$(function(){
  var getText = function(selector){
    if (selector === "") {
      return undefined;
    }
    
    var tags = $(selector);
    var returnText = "";
    
    
    $.each(tags, function( index, value ) {
      returnText += value.innerText + "\n";
    });
    
    return returnText;
  }
  
  $('#button_get').on('click', function(){
    var selector = $("#selector").val();
    console.log(getText(selector));
  });
});


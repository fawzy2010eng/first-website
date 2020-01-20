$(document).ready(function () {
    $('.ourprojects #lastrow').hide();
    $('#showless').hide();
   $('#showmore').click(function(){
       $('.ourprojects #lastrow').fadeIn(function(){
           $('#showless').show();
           $('#showmore').hide();
       })
   });
    $('#showless').click(function(){
       $('.ourprojects #lastrow').fadeOut(function(){
           $('#showless').hide();
           $('#showmore').show();
       })
   })
   
    
    var slider =1;
    
    $('#right').click(function(){
        $('#left').show();
        slider++;
        var x = slider - 1;
        if(slider > 3){
            $('#right').hide();
        }
        $('#test'+x).fadeOut(500);
        $('#test'+slider).fadeIn(500);
    });
    $('#left').click(function(){
        $('#right').show();
        slider--;
        var x = slider + 1;
        if(slider < 2){
            $('#left').hide();
        }
        $('#test'+x).fadeOut(500);
        $('#test'+slider).fadeIn(500);
    });
});

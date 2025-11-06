 $(document).ready(function(){
        $('#bb').mouseleave(function(){
            
                let a = parseFloat($('#a').val());
                let b = parseFloat($('#b').val());
                let s = a + b;
               
                $('#hh').text("sum is : " + s);
 
        });
    });
    document

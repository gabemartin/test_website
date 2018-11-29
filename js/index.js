var ToC, newLine, random; 
ToC = "";


$(window).resize(function(){

   var height = $(window).height();
   var width = $(window).width();  

   var boxCountH = Math.round(height / 20);
   var boxCountW = Math.round(width / 20);
   var boxCount = Math.round(boxCountW * boxCountH) + boxCountW;


   for(var i = 0; i < boxCount; i++) {   
     random = Math.ceil(Math.random() * 3);
     newLine = "<div class='color" + random + "'></div>";

     ToC += newLine;
   }; 
   
   $("area").append(ToC);  
   $('section').height(height);
   $('section').width(width);  
   $('area').width(width+10);   
})

$(window).resize();
 $(document).ready(function(){

  $("#mission").animate({opacity: 1.0},5000);

  $("#skills a").click(function(event){
    event.preventDefault();
    var skill = $(this).attr("class");
    if(skill === "full-text"){
      if($("div.full-text").hasClass("hidden")){
        $("div.full-text").removeClass("hidden").addClass("active", {duration:1000});
        $("div.front-text").addClass("hidden").removeClass("active");
      }
    }
    else{
      if($("div.front-text").hasClass("hidden")){
        $("div.front-text").removeClass("hidden").addClass("active", {duration:1000});
        $("div.full-text").addClass("hidden").removeClass("active");
      }
    }
  });


   $("#mission").mouseenter(function(){
    $("#arrow").animate({opacity: 1.0},500);
   }).mouseleave(function(){
    $("#arrow").animate({opacity: 0.0},500);
   });

  var offset = ($("#skills-bars").offset().top - ($("#skills-bars").height()+400));
  function testScroll(event){
    if(window.pageYOffset >= offset){
      if($(".skillbar-bar").width() === 0){
        if(window.pageYOffset >= offset){
        // animate skill bar
          $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
              width:$(this).attr('data-percent')
            },4000);
          });
        // animate percentage change
          $('.skill-bar-percent').each(function () {
            var display = $(this);
            var nextValue = parseInt($(this).parent().attr('data-percent'));
            var currentValue = 0;
            var diff = nextValue - currentValue;
            var time = 4000/diff;
            for (var i = 0; i < Math.abs(diff); ++i) {
              setTimeout(function() {
                  currentValue += 1;
                  display.text(currentValue+"%");
              }, time * i);
            }
          });
        }
      }
    }
  }


    var offset2 = $(".star-row").offset().top - 800;
    function testScroll2(event){
      if(window.pageYOffset >= offset2){
        $(".star-row").each(function(){
          if($(this).find(".star-container").find("img").length <= 0){
            var number = parseInt($(this).find(".star-container").attr("data-number"));
            var currentValue = 0;
            var display = $(this).find(".star-container");
            var textSpan = $(this).find(".star-number");
            var diff = number - currentValue;
            var time = 4000/diff;
            for(var i = 0; i < Math.abs(diff); i++){
              setTimeout(function(){
                display.append("<img class='star' src='/images/star.png'>");
                currentValue+=1;
                textSpan.text(currentValue);
              }, time * i);
            }
          }
        });
      }
    }
    var offset3 = $(".star-row-decimal").offset().top - 800;
    function testScroll3(event){
      if(window.pageYOffset > offset3){
        $(".star-row-decimal").each(function(){
          if(parseFloat($(this).find(".star-number").text()) === 0){
            var number = parseInt($(this).find(".star-container").attr("data-number")) + .5;/*number rounded up*/
            var currentValue = 0;
            var display = $(this).find(".star-container");
            var textSpan = $(this).find(".star-number");
            var diff = (number - currentValue) * 10;/*15*/
            var time = 4000/diff;
            for(var i = 0; i < Math.abs(diff); i++){
              setTimeout(function(){
                currentValue += 0.1;
                textSpan.text(currentValue.toFixed(1));
              }, time * i);
            };
            for(var j = 1; j <= ((diff/10)+ 0.5); ++j){
              var count = 1;
              setTimeout(function(){
                  if(count < ((diff/10) + 0.5)){
                  display.append("<img class='star' src='/images/star.png'>");
                  }else{
                  display.append("<img class='star' src='/images/halfstar.png'>");
                  }
                  count+=1;
                }, time * j*7);
              }
            }
        });
      }
    }
    var offset4 = $("#bubbletext").offset().top - 550;
    function testScroll4(event){
      if(window.pageYOffset > offset4){
        $("#pixelme").animate({opacity:1.0},5000);
        $("#bubbletext").animate({opacity:1.0},5000);
        $("#about-me-skills").animate({opacity:1.0},5000);

      }
    }



    var scroller = function(){
      testScroll();
      testScroll2();
      testScroll3();
      testScroll4();
    }
  window.onscroll = scroller;
});


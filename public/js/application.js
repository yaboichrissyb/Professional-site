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

  var offset = ($("#skills-bars").offset().top - ($("#skills-bars").height() + 150));
  function testScroll(ev){
    if($(".skillbar-bar").width() === 0){
      if(window.pageYOffset >= offset){
      // animate skill bar
        $('.skillbar').each(function(){
          $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
          },6000);
        });
      // animate percentage change
        $('.skill-bar-percent').each(function () {
          var display = $(this);
          var nextValue = parseInt($(this).parent().attr('data-percent'));
          var currentValue = 0;
          var diff = nextValue - currentValue;
          var time = 6000/diff;
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


    window.onscroll=testScroll;



});


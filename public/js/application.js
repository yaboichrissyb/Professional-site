 $(document).ready(function(){
   $("#skills a").click(function(event){
    event.preventDefault();
    var skill = $(this).attr("class");
    if(skill === "full-text"){
      if($("div.full-text").hasClass("hidden")){
        $("div.full-text").removeClass("hidden").addClass("active");
        $("div.front-text").addClass("hidden").removeClass("active");
      }
    }
    else{
      if($("div.front-text").hasClass("hidden")){
        $("div.front-text").removeClass("hidden").addClass("active")
        $("div.full-text").addClass("hidden").removeClass("active");
      }
    }
  });
   $(".modal-trigger").click(function(event){
    event.preventDefault();
    $('#modal1').openModal();
   });
 });


$( document ).ready(function(){
// bring moused over team into focus
    $(".team").mouseover(function(){
      $(".team").animate({height: '30px', zIndex: 0},0)
      $(".team").css("zIndex", 0)
      $(this).animate({height: '50px', zIndex: 10},300);
      $("#team-name").text(this.id.replace(/-/g," ").toUpperCase());
    });
// filter by american league
  $("#american-button").click(function(){
    $("li").remove();
    if($("#division-lists-container").css("display", "hidden")){
      $("#division-lists-container").css("display", "block");
    }
    $(".national").animate({opacity:0.1, height:'30px'},300);
    $(".american").animate({opacity: 1.0, height:'50px'},300)
    var national = $(".national");
    for(var i=0;i<national.length;i++){
      var division = $(national[i]).attr('class').split(' ')[1];
      $("#" + division +">ol").append("<li class='"+national[i].id+"''>"+national[i].id.replace(/-/g," ").toUpperCase()+"</li>")
    };
  });
  // filter by national league
  $("#national-button").click(function(){
    $("li").remove();
    if($("#division-lists-container").css("display", "hidden")){
      $("#division-lists-container").css("display", "block");
    }
    $(".american").animate({opacity:0.1, height:'30px'},300);
    $(".national").animate({opacity: 1.0, height:'50px'},300)
    var american = $(".american")
    for(var i=0;i<american.length;i++){
      var division = $(american[i]).attr('class').split(' ')[1];
      $("#" + division +">ol").append("<li class='"+american[i].id+"''>"+american[i].id.replace(/-/g," ").toUpperCase()+"</li>").show("slow")
    };
  });
// clear side bar when mouse leaves
  $("#shown-info").mouseleave(function(){
    $(".team").animate({opacity: 1.0, height:'30px'},300);
  });
// bring division into focus when mouse over
  $(".division-list").mouseenter(function(){
    var division = this.id
    var length =$("#"+division + "> ol > li").length;
    $(".team").animate({height: '30px', opacity: 0.1},300);
    for(var i = 0; i < length; i++){
      var teamId = $("#"+division + "> ol > li")[i].classList[0];
      console.log(teamId);
      $("#"+teamId).animate({height: '50px', opacity: 1.0, zIndex: 10},300)
    }

  });
  $(".league").click(function(){
    var buttonID = this.id;
    if(buttonID === "american-button"){
      $("#american-button").css("color", "white");
      $("#national-button").css("color", "black");
    } else {
      $("#national-button").css("color", "white");
      $("#american-button").css("color", "black");
    }
  });


});


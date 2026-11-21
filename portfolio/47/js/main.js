$(document).ready(function() {
    $(".custom-scroll").length && (adjScroll(), $(".custom-scroll").perfectScrollbar());
});

$(window).resize(function() {
    adjScroll()
});

function adjScroll() {
    if ($(".custom-scroll").length) {
        if (800 < $(window).width()) {
           var b = $(window).height() - $(".executeart-panel-title").height() - $(".executeart-back-pre").height() - 145;
            $(".custom-scroll").height(b)
        } else $(".custom-scroll").height(150);
        $(".custom-scroll").perfectScrollbar("update")
    }
}

$(".screenshots-list li a").click(function() {
    if ($(this).hasClass("selected")) return !1;
    $(".screenshots-list li a.selected").removeClass("selected");
    $("#iframe-area").hide();
    $(".screenshots-container").removeClass("display-none");
    $(this).addClass("selected");
    var b = $(this).attr("href"),
        a = new Image;
    a.src = b;
    a.onload = function() {
        $(".screenshots-container").empty().append(a);
        $("html, body").animate({
            scrollTop: $(".screenshots-container").offset().top
        }, 500)
    };
    $(".screenshots-container").empty().html('<div class="loading-screenshot"></div>');
    return !1
});

function desktop_view(ele)
{
  $('#tablet_view').removeClass('active');
  $('#mobile_view').removeClass('active');
  $(ele).addClass('active');
  $('#iframe-area').css({'width':'100%','max-width':'100%','margin':'auto'});
  $('#iframe-area').removeClass('tablet');
  $('#iframe-area').removeClass('smart_mobile');
  $(".screenshots-container").addClass("display-none");
  $("#iframe-area").show();
  $("html, body").animate({
    scrollTop: $("#iframe-area").offset().top
  }, 500)
}

function tablet_view(ele)
{
  $('#desktop_view').removeClass('active');
  $('#mobile_view').removeClass('active');
  $(ele).addClass('active');
  $('#iframe-area').css({'width':'400px','max-width':'400px','margin':'auto'});
  $('#iframe-area').removeClass('smart_mobile');
  $('#iframe-area').addClass('tablet');
  $(".screenshots-container").addClass("display-none");
  $("#iframe-area").show();
  $("html, body").animate({
    scrollTop: $("#iframe-area").offset().top
  }, 500)
}

function mobile_view(ele)
{
  $('#desktop_view').removeClass('active');
  $('#tablet_view').removeClass('active');
  $(ele).addClass('active');
  $('#iframe-area').css({'width':'340px','max-width':'340px','margin':'auto'});
  $('#iframe-area').removeClass('tablet');
  $('#iframe-area').addClass('smart_mobile');
  $(".screenshots-container").addClass("display-none");
  $("#iframe-area").show();
  $("html, body").animate({
    scrollTop: $("#iframe-area").offset().top
  }, 500)
}

jQuery(document).ready(function($) {
    // Typing effect
    $("#typing").typed({
        strings: ["Email development by Amanda", "at Amanda", "Email Design", "Email Code",  "Responsive Newsletter", "Landing Page", "PSD to HTML5","WEB BANNER DESIGNS", "BUSINESS CARD DESIGNS", "Website Design", "Logo Design", "Graphic Design",],
        typeSpeed: 0,
        backSpeed: 0,
        startDelay: 1500,
        backDelay: 3500,
        loop: true,
        loopCount: 6,
        showCursor: true
    });
    
});

//Disable cut copy paste
$('body').bind('cut copy paste', function (e) {
    e.preventDefault();
});

//Disable mouse right click
$("body").on("contextmenu",function(e){
    return false;
});

//Disable F12 Key
$(document).keydown(function(event){
if(event.keyCode==123){
    return false;
}
    else if (event.ctrlKey && event.shiftKey && event.keyCode==73){        
         return false;
}
});

$(document).on("contextmenu",function(e){        
   e.preventDefault();
});

//Disable print Key
$(window).keyup(function(e){
  if(e.keyCode == 44){
    $("body").hide();
  }
});
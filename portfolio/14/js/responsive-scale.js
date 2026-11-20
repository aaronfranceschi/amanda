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
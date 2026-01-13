export function responsible() {
      $(".team-page-bottom__button").addClass("_hidden");
      $(".team-page-bottom-item").each(function(index, element) {
            $(this).addClass("_hidden");
                  if(index<=5){
                        $(element).removeClass("_hidden");
                  }if(index > 5){
                        $(".team-page-bottom__button").removeClass("_hidden");
                  }
            });
      $(".team-page-bottom__button").click(function() {
            $(".team-page-bottom-item").removeClass("_hidden");
            $(".team-page-bottom__button").addClass("_hidden");
      });
}
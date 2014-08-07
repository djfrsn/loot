(function( $ ){
	/* 19.2px per pixel of padding-top needed to keep content centered */

    /* Dont judge my nameschema - lonewolf */

        strokes = function() {
              var some = $( '.tan-bg, .skimaskbg, .canvas');
              setTimeout(function(){
        $('.skimaskbg').addClass('animated fadeOut');      }, 3000)
        $('body').addClass('overflow-vis');
        $('.lootmob').css('float', 'none');    
        }

        $( '.a-her' ).click(function() {
            strokes();
        })

        var delay = 3000;
        setTimeout(function(){
        strokes().fadeIn("slow");
        }, delay);

        var icons = $('.fa-instagram, .fa-envelope');
        var mql = window.matchMedia('(min-width: 360px)');
        var mqs = window.matchMedia('(min-width: 1px)');

        window.onload = function() {
                if (mqs.matches) {
                icons.addClass('fa-2x');
            }
                if (mql.matches) {
                icons.addClass('fa-3x');
            }};

        window.onresize = function() {
            if (mql.matches) {
                icons.removeClass('fa-2x');
                icons.addClass('fa-3x');
            } else {
            if (mqs.matches) {
                icons.removeClass('fa-3x');
                icons.addClass('fa-2x');            
        }}};


})( jQuery );
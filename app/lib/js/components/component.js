$(document).ready(function( $ ) {
	/* 19.2px per pixel of padding-top needed to keep content centered */

    /* Dont judge my nameschema - lonewolf */

        
              setTimeout(function(){ $('.skimaskbg').fadeOut( 600 ); }, 3000)
              setTimeout(function(){
              $('.lootHTML')
                .addClass('animated fadeIn')
                .load('lib/include/body/loot.html')
          }, 3650);
});
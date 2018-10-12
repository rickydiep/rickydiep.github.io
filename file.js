//NAVBAR Scroll Color Change
$(document).ready(function(){   
    $(this).scrollTop(0);    
    var scroll_start = 0;
    var startchange = $('#about');
    var offset = startchange.offset();
    if (startchange.length){
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top-80) {
        $('#mynav').css('visibility', 'visible');
           $("#mynav").css('background-color', '#f0f0f0');
        } else if(scroll_start == 0){
            $('#mynav').css('visibility', 'visible');
            $('#mynav').css('background-color', 'transparent');
        }
         else{
            $('#mynav').css('visibility', 'hidden');
        }
    });
     }
    $('#navContents a').on('click', function(){
        $('#navbarNavAltMarkup').removeClass('show');
    });

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        loop:Infinity,
        typeSpeed: 50,
        backSpeed: 25,
        smartBackspace: true, 
        backDelay: 1200,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
      });


      $('.SeeMore').click(function(){
		var $this = $(this);
		$this.toggleClass('SeeMore');
		if($this.hasClass('SeeMore')){
            console.log(this)
			$this.text('Show More   ').append('<i class="fa fa-angle-double-down" aria-hidden="true"></i>');	
		} else {
            console.log(this)
            $this.html('Less   ').append('<i class="fa fa-angle-double-up" aria-hidden="true"></i>');;		
		}
	});
 });





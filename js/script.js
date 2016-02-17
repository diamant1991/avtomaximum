$('input,textarea').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder'))
  $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});

function testJump(x){
  var ml = ~~x.getAttribute('maxlength');
  if(ml && x.value.length >= ml){
      do{
          x = x.nextSibling;
      }
      while(x && !(/text/.test(x.type)));
      if(x && /text/.test(x.type)){
          x.focus();
      }
  }
}

$('.enroll-link').click(function(e) {
	e.preventDefault();
	var form = $('.dropdown-form');
	if (!form.hasClass('active')) {
		$(this).addClass('active');
		form.addClass('active');
	}
	else{
		$(this).removeClass('active');
		form.removeClass('active');
	}
});

$(window).scroll(function () { 
  if ($(this).scrollTop() > 100) 
  	$('.sticky-header').fadeIn(300);
  else 
  	$('.sticky-header').fadeOut(300);
});

$("#hiddenField2").datepicker({
  showOn: "button",
  buttonText: "",
  dateFormat: 'd / MM / y'
});

$('.enroll-modal-link').click(function(e) {
	e.preventDefault();
	if( $('.form-mask').is(':hidden') ){
		$('.form-mask').fadeIn(200);
		$('.enroll-modal').fadeIn(200);
		$('.enroll-modal').addClass('open')
	}
});

$('.close-modal, .form-mask').click(function(e) {
	e.preventDefault();
	if ($('.form-mask').is(':visible')) {
		$('.form-mask').fadeOut(200);
		$('.modal').fadeOut(200);
		$('.modal').removeClass('open')
	}
});

$('.close-modal-btn').click(function(e) {
	e.preventDefault();
	if ($('.complete').is(':visible')) {
		$('.form-mask').fadeOut(200);
		$('.modal').fadeOut(200);
		$('.modal').removeClass('open')
	}
});

jQuery(function($){
  $(".tel-mask").mask("+8 (999) 999-9999");
  $(".large__input").mask("999-99-99");
});

$(document).keyup(function(d) {
  if (d.keyCode == 27 && $('.dropdown-form').hasClass('active')) {
    $('.dropdown-form').removeClass('active');
    $('.enroll-link').removeClass('active');
  }
});

$(function() {
	$(document).mouseup(function (e){ 
		var div = $('.dropdown-form');
		if (!div.is(e.target) && div.has(e.target).length === 0 && $('#ui-datepicker-div').has(e.target).length === 0) {
			div.removeClass("active");
			$('.enroll-link').removeClass('active');
		}
	});
});
$('input,textarea').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder'))
  $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});

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
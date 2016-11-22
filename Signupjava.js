var database = firebase.database();

$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

$(".tabs").on("click",function(e){
	$(".tabs").removeClass("act");
	$(e.target).addClass("act");
}


$(".signup-btn").on("click", function() {
	var email = $("#email").val();
	var password = $("#password2").val();
	console.log(email);
	console.log(password);
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
	console.log(errorMessage);
	
}).then(function(e){
	console.log("test");
});
});
$("#login-submit").on("click", function() {
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
});

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
$(document).ready(function(){
	console.log(getCookie("form"));
	if (getCookie("form")==1)
	{
		$(".register").trigger("click");
	}
});
var database = firebase.database();

$('.login').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		
});
	$('.register').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
});


$(".register, .login").on("click",function(e){
	$(".login").removeClass("act");
	$(".register").removeClass("act");
	$(e.target).addClass("act");
	
});

$("#login-submit, #register-submit").on("click",function(){
	window.location.assign("https://aj6063.github.io/YearProject/Quizzes.html")
}
$("register-submit").on("click", function() {
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
	var email = $("#username").val();
	var password = $("#password").val();
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
});

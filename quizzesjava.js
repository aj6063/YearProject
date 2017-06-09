var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('');
var user;
var selectedFile;

var database = firebase.database();
$('.login').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
});
	$('.register').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
});


$(".register, .login").on("click",function(e){
	$(".login").removeClass("act");
	$(".register").removeClass("act");
	$(e.target).addClass("act");
});
  $( document ).ready(function() {
	  $("uploadButton").hide();
	  
          document.getElementByID("upload").addEventListener('change', handleFileSelect, false);
});

$("#file").on("change", function(event) {
  selectedFile = event.target.files[0];
  $("uploadButton").show();
});
    
function uploadFile() {
  //Create a root reference
  var storageRef = firebase.storage().ref('/quizQuestions/' + filename);
  var filename = selectedFile.name;
  var uploadTask = storageRef.put(selectedFile);

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on('state_changed', function(snapshot){
  // Observe state change events such as progress, pause, and resume
}, function(error) {
  // Handle unsuccessful uploads
}, function() {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  var postKey = firebase.database().ref("Posts/").push().key;
  var downloadURL = uploadTask.snapshot.downloadURL;
  var updates = {};
  var postData = {
    url: downloadURL,
    caption: $("#imageCaption").val(),
    user: user.uid
  };
  updates['/Posts/' + postKey] = postData;
  firebase.database().ref().update(updates);
});

}


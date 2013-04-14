
function takePicture() {
navigator.camera.getPicture(cameraSuccess, cameraFailure, null);
}

function cameraSuccess(imageUrls) {
//this is an array of all the photos taken while the camera app was open
debug.log(imageUrls[0]);
document.getElementById("preview").innerHTML = "<img src='" + imageUrls[0] + "' class='preview'/>";
}

function cameraFailure() {
document.getElementById("preview").innerHTML = "camera error";
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
function showModal(img){
  modal.style.display = "block";
  modalImg.src = img.src;
}

var modalVid = document.getElementById("vid01");
function showModalVid(vidSrc){
  modal.style.display = "block";
  modalVid.src = vidSrc;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

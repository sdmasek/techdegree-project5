baguetteBox.run('.gallery');

// const search = new Filter('search', 'data-caption');


function searchGallery() {
    let input = document.getElementById("search").value;
    let inputLowerCase = input.toLowerCase();
    let photos = document.getElementsByClassName("photos");
    let caption = document.getElementsByTagName("a").getAttribute("data-caption");

    for (i = 0; i < photos.length; i++) {

        if (!photos[i].innerHTML.toLowerCase().includes(inputLowerCase)) {
            caption.style.display = "none";
        }
        else {
            caption.style.display = "list-item";
        }
    }

}
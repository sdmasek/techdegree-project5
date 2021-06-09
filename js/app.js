baguetteBox.run('.gallery');

// const search = new Filter('search', 'data-caption');


function searchGallery() {

    let photos = document.getElementsByTagName("a");

    for (let i = 0; i < photos.length; i++) {
        let input = document.getElementById("search").value.toLowerCase();
        let caption = photos[i].getAttribute("data-caption");
        // console.log(caption);
        if (input.includes(caption)) {
            // console.log(caption);
            photos[i].style.display = "block";
        }
        else {
            photos[i].style.display = "none";
            // console.log("no caption available");
        }
    }
}